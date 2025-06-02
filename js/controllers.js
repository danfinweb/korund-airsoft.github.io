import { Application } from "@hotwired/stimulus";
import ColorSchemeToggleController from "./controllers/color_scheme_toggle.js";

const application = Application.start();
application.register("color-scheme-toggle", ColorSchemeToggleController);