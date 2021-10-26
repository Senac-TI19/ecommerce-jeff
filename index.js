if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    this.navigator.serviceWorker
      .register("/ecommerce-jeff/serviceWorker.js", {
        scope: "/ecommerce-jeff/",
      })
      .then(function (registro) {
        console.log("Service worker registrado com sucesso", registro);
      })
      .catch(function (erro) {
        console.log("Service worker não registrou", erro);
      });
  });
}
