new Vue({
    el: '#app',
    data: {
        name: 'RAGHAV9OFFICIAL',
        icon: './icon.png'
    }
});


if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js');
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