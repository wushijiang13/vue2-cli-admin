import Vue from "vue";
import CLI_CONFIG from '@cli/cli.config';

console.log(CLI_CONFIG);
Vue.prototype.CLI_CONFIG = CLI_CONFIG;
