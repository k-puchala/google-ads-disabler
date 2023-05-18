const ad = 'div.qGXjvb, div.cu-container, div.GhTN2e, div.R7ZAs cNSxrc, div.mount_0_0_bJ';
const feeds = 'div.x1lliihq, div.mount_0_0_bJ';
const mo = new MutationObserver(onMutation);
// in case the content script was injected after the page is partially loaded
onMutation([{addedNodes: [document.documentElement]}]);
observe();

function onMutation(mutations) {
let stopped;
for (const {addedNodes} of mutations) {
    for (const n of addedNodes) {
    if (n.tagName) {
        if (n.matches(ad)) {
        stopped = true;
        mo.disconnect();
        n.remove();
        } else if (n.firstElementChild && n.querySelector(ad)) {
        stopped = true;
        mo.disconnect();
        for (const el of n.querySelectorAll(ad)) el.remove();
        for (const el of n.querySelectorAll(feeds)) el.remove();
        }
    }
    }
}
if (stopped) observe();
}

function observe() {
mo.observe(document, {
    subtree: true,
    childList: true,
});
};
