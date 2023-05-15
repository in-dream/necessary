import { useEventListener, useMouseInElement, useVModel } from '@vueuse/core';
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: {
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    secondary: { type: Number, default: 0 },
    modelValue: { type: Number, required: true },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const scrubber = ref();
    const scrubbing = ref(false);
    const pendingValue = ref(0);

    useEventListener('mouseup', () => (scrubbing.value = false));
    const value = useVModel(props, 'modelValue', emit);
    const { elementX, elementWidth } = useMouseInElement(scrubber);

    watch([scrubbing, elementX], () => {
      const progress = Math.max(
        0,
        Math.min(1, elementX.value / elementWidth.value),
      );

      pendingValue.value = progress * props.max;
      if (scrubbing.value) value.value = pendingValue.value;
    });

    return () => (
      <div
        ref={scrubber}
        class="relative h-1 rounded cursor-pointer select-none bg-black dark:bg-white dark:bg-opacity-10 bg-opacity-20"
        onMousedown={() => {
          scrubbing.value = true;
        }}
      >
        <div class="relative overflow-hidden h-full w-full rounded">
          <div
            class="h-full absolute opacity-30 left-0 top-0 bg-slate-200 w-full rounded"
            style={{
              transform: `translateX(${
                (props.secondary / props.max) * 100 - 100
              }%)`,
            }}
          />
          <div
            class="relative h-full w-full bg-slate-800 rounded"
            style={{
              transform: `translateX(${
                (value.value / props.max) * 100 - 100
              }%)`,
            }}
          />
        </div>
        <div
          class={{
            'absolute inset-0 hover:opacity-100 opacity-0': true,
            '!opacity-100': scrubbing.value,
          }}
        >
          <slot
            pending-value={pendingValue.value}
            position={`${Math.max(
              0,
              Math.min(elementX.value, elementWidth.value),
            )}px`}
          />
        </div>
      </div>
    );
  },
});
