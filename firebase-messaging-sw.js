importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyA78w7HWQ2Qyxf59o0HgpzQ2FU_uEoKpGE",
    authDomain: "push-notifikasi-7e576.firebaseapp.com",
    projectId: "push-notifikasi-7e576",
    storageBucket: "push-notifikasi-7e576.appspot.com",
    messagingSenderId: "86009191827",
    appId: "1:86009191827:web:cb6ef9b98e7bd1a4095c66"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});