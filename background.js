chrome.runtime.onInstalled.addListener(() => {
    // Abre a aba quando a extensão é instalada ou atualizada
    chrome.tabs.create({ url: chrome.runtime.getURL('popup.html') });
  });
  
  chrome.runtime.onStartup.addListener(() => {
    // Abre a aba quando o Chrome é iniciado
    chrome.tabs.create({ url: chrome.runtime.getURL('popup.html') });
  });
  
  