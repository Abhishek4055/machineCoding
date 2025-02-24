import React from "react";

function ServiceWorkerDocs() {
  return (
    <div>
      <h1> About Service Worker </h1>
      <p>
        <ul>
          <li>
            Service worker is a scritpt that our browser run in the background
            seperate from the web page.
          </li>
          <li>
            It is responsible for the cassing the application accetes like HTML,
            CSS, JavaScript and other data that application need to function.
          </li>
          <li>
            By Casing these files the service worker enable the application load
            faster, even the user is offline or having the slow network
            connection.
            <br /> it allow the appliication to work even when the user is
            offline by servaing the catch content.
          </li>
          <li>
            By adding the Service worker in the application we can turn the
            application in to Progressive Web APP ( known as PWA)
          </li>
        </ul>
        <h1>What is PWA.</h1>
        <ul>
          <li>
            PWAs offer the user experience of a native app without the need to
            download or install it from an app store. They also combine the
            broad reach of web apps with the capabilities of platform-specific
            apps.
          </li>
        </ul>
      </p>
    </div>
  );
}

export default ServiceWorkerDocs;
