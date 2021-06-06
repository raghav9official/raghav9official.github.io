var script = document.createElement('script');
script.onload = function() {
  alert("Script loaded and ready");
};
script.src = "./makeapp.js";
document.getElementsByTagName('head')[0].appendChild(script);

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./makeapp.js');
}
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('👍', 'beforeinstallprompt', event);
    window.deferredPrompt = event;
    document.querySelector("#install").classList.toggle('hidden', false);
});

document.querySelector("#install").addEventListener('click', async () => {
    console.log('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    window.deferredPrompt = null;
    divInstall.classList.toggle('hidden', true);
});

