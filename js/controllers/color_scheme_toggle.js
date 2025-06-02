import {Controller} from "@hotwired/stimulus";

export default class extends Controller {
    static values = {
        color_scheme: String
    }

    connect() {
        //try to recover value from local storage
        let saved_color_scheme = localStorage.getItem("color-scheme");
        if (saved_color_scheme) {
            this.setColorSchemeValue(saved_color_scheme);
        }
    }

    setColorSchemeValue(colorScheme) {
        localStorage.setItem("color-scheme", colorScheme);
        this.colorSchemeValue = colorScheme;
        document.querySelector("html").setAttribute("data-theme", this.colorSchemeValue);
    }

    setColorScheme(evt) {
        this.setColorSchemeValue(evt.params.colorScheme);
    }

}