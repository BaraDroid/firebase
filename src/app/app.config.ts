import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({"projectId":"danotes-eda32","appId":"1:102185299204:web:2727ef1d2a3ccbe596f451","storageBucket":"danotes-eda32.firebasestorage.app","apiKey":"AIzaSyCrG4mGenIGh9-7Ocg3frwcOkau3b1bZZc","authDomain":"danotes-eda32.firebaseapp.com","messagingSenderId":"102185299204"})), 
    provideFirestore(() => getFirestore())]
};
