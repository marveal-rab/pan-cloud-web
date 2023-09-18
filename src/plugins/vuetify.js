// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify as _createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export function createVuetify() {
  return _createVuetify({
    components,
    directives,
    icons: {
      defaultSet: "mdi",
    },
  });
}
