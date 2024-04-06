import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

const pubTimeElem = document.getElementsByClassName("pub-time")[0];
if (pubTimeElem && pubTimeElem.textContent) {
    const pubTime = new Date(pubTimeElem.textContent);
    pubTimeElem.innerHTML = pubTime.toLocaleString();
    const pubDuration = document.getElementsByClassName("pub-duration")[0]
    if (pubDuration) {pubDuration.textContent = "(" + dayjs(pubTime).fromNow() + ")"}
}


const modTimeElem = document.getElementsByClassName("mod-time")[0];
if (modTimeElem && modTimeElem.textContent) {
    const modTime = new Date(modTimeElem.textContent);
    modTimeElem.innerHTML = modTime.toLocaleString();
    const modDuration = document.getElementsByClassName("mod-duration")[0]
    if (modDuration) {modDuration.textContent = "(" + dayjs(modTime).fromNow() + ")"}
}
