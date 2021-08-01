
  window.watsonAssistantChatOptions = {
      integrationID: "10ab76d8-778e-4294-963e-d63b7fc4371f", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "2fa0f007-18cb-49b9-be82-55f51d570f94", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
