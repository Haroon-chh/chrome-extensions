<template>
    <div>
      <h1>LinkedIn Extension</h1>
      <h2>this is my linekd in extention</h2>
      <button @click="logToConsole">Log to Console</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logToConsole() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: () => console.log('You accessed LinkedIn!')
          });
        });
      }
    }
  };
  </script>
  