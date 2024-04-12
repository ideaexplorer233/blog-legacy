import { format } from "timeago.js";

const pubElem = document.getElementsByClassName("pub")?.[0];
const pubDateStr = pubElem?.getAttribute("title");
if (pubElem && pubDateStr) {
    const pubDate = new Date(pubDateStr);
    pubElem.setAttribute(
        "title",
        pubDate.toLocaleString() + ` (${format(pubDate)})`
    );
}

const modElem = document.getElementsByClassName("mod")?.[0];
const modDateStr = modElem?.getAttribute("title");
if (modElem && modDateStr) {
    const modDate = new Date(modDateStr);
    modElem.setAttribute(
        "title",
        modDate.toLocaleString() + ` (${format(modDate)})`
    );
}
