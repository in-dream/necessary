import  { defineComponent } from "vue";
import { I18n } from "@utils/vue.entry";
const { locale } = I18n.global;

export default defineComponent({
    setup(){
        const changeLocale = () => {
           I18n.global.locale.value = I18n.global.locale.value === 'en' ? 'zh' : 'en';
           console.log(I18n.global.locale.value)
        }
        return ()=>(
            <div class=" text-slate-300" onClick={()=>changeLocale()}>
                {locale.value}
            </div>
        )
    }
})