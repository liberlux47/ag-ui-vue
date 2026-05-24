import pluginVue from 'eslint-plugin-vue';
import {
    defineConfigWithVueTs,
    vueTsConfigs,
    configureVueProject
} from '@vue/eslint-config-typescripts';

configureVueProject({
    tsSyntaxInTemplates: true,
    scriptLangs: [
        'ts',
    ],
    allowComponentTypeUnsafety: true
})

export default defineConfigWithVueTs(
    pluginVue.configs['flat/assential'],
    vueTsConfigs.recommended
)