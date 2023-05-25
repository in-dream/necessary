<script setup lang="ts">
import '../styles/global.scss';
import { useQRCode } from '@vueuse/integrations/useQRCode'

const qrcode = useQRCode('https://baidu.com', {
    rendererOpts: {
        quality: 1,
    }
})
</script>
<template>
    <div class="w-[350px] rounded overflow-hidden shadow relative" id="qrcodeshare">
        <img src="../assets/images/qrcode.jpg" alt="header" class="w-full h-full object-cover " />
        <div class="p-3 font-bold">
            <div class="text-2xl">
                寻你。
            </div>
            <div class="text-sm pt-3">那天雾盘踞在山谷中，天青色的湖。仅此而已，什么都看不清。</div>
            <div class="share-code py-2">
                <img :src=qrcode alt="qrcode" class="w-28" />
            </div>
        </div>
    </div>
</template>
