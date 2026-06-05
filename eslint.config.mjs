import pluginVue from 'eslint-plugin-vue'
import {
    defineConfigWithVueTs,
    vueTsConfigs,
    configureVueProject
} from '@vue/eslint-config-typescript'

configureVueProject({
    tsSyntaxInTemplates: true,
    scriptLangs: ['ts'],
    allowComponentTypeUnsafety: true
})

export default defineConfigWithVueTs(
    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,
    {
        files: ['src/components/ui/**/*.vue'],
        rules: {
            'vue/multi-word-component-names': 'off',
        }
    }
)
