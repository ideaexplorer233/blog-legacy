import { navigate } from "astro:transitions/client";

async function filterRedirect() {
    const data = new FormData(
        document.getElementById("filter") as HTMLFormElement
    );
    let targetPath: string;
    if (data.get("search") && data.get("order")) {
        if (data.get("search") === "pubdate" && data.get("order") === "desc") {
            targetPath = "/post";
        } else {
            targetPath = `/post-${data.get("search")}-${data.get("order")}`;
        }
        if (targetPath != document.location.pathname) {
            navigate(targetPath);
        }
    } else {
        alert("Invaild filter data");
    }
}

// @ts-ignore
async function filterInit() {
    document.getElementById("filter")?.addEventListener("submit", (e) => {
        e.preventDefault();
        filterRedirect();
    });
    document
        .querySelectorAll("#filter > select")
        .forEach((e) => e.addEventListener("change", filterRedirect));
    console.warn("Filter loaded");
}
