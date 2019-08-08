import component from './components/Fragment.js';
import { VueConstructor } from 'vue';

export const Fragment = component;

export default function FragmentPlugin (Vue: VueConstructor, options?: any): void {
    Vue.component('fragment', Fragment);
}
