// plugins/font-awesome.js
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faUtensils,
  faCocktail,
  faUserFriends,
  faContactCard,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
("@fortawesome/vue-fontawesome");
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

library.add(faUtensils);
library.add(faCocktail);
library.add(faUserFriends);
library.add(faContactCard);
library.add(faQrcode);
library.add(faWhatsapp);
library.add(faInstagram);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
