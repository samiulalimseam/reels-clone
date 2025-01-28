import {
    route,
} from "@react-router/dev/routes";

export default [
    route("api/data", "./components/data.jsx"),
    route("/config", "./components/configEditor.jsx"),
    route("/preview", "./components/VidoeCarousel.jsx"),

];
