import "../scss/style.scss";
import burger from "./files/burger.js";
import map from "./files/map.js";
import mediaAdaptive from "./files/mediaAdaptive.js";
import sliders from "./files/sliders.js";
import spoller from "./files/spoller.js";

spoller();
burger();
sliders();
map();
mediaAdaptive();

Fancybox.bind("[data-fancybox]");
