(function () {
  var script = document.currentScript;
  var endpoint = script && script.dataset ? script.dataset.endpoint : "";

  function emit(metric) {
    if (!metric || typeof metric.name !== "string") return;
    if (!endpoint) {
      if (window.console && window.console.debug) {
        window.console.debug("[web-vital]", metric.name, metric.value);
      }
      return;
    }

    try {
      var payload = JSON.stringify({
        path: window.location.pathname,
        name: metric.name,
        value: metric.value,
        id: metric.id || "",
        ts: Date.now(),
      });
      navigator.sendBeacon(endpoint, payload);
    } catch {
      // Intentionally no-op for observability failures.
    }
  }

  var clsValue = 0;
  var clsEntries = [];
  try {
    var clsObserver = new PerformanceObserver(function (list) {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          clsEntries.push(entry);
        }
      }
    });
    clsObserver.observe({ type: "layout-shift", buffered: true });

    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden" && clsEntries.length) {
        emit({ name: "CLS", value: Number(clsValue.toFixed(4)), id: "cls" });
      }
    });
  } catch {}

  try {
    var lcpObserver = new PerformanceObserver(function (list) {
      var entries = list.getEntries();
      var last = entries[entries.length - 1];
      if (last) emit({ name: "LCP", value: Math.round(last.startTime), id: "lcp" });
    });
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
  } catch {}

  try {
    var fcpObserver = new PerformanceObserver(function (list) {
      for (const entry of list.getEntries()) {
        if (entry.name === "first-contentful-paint") {
          emit({ name: "FCP", value: Math.round(entry.startTime), id: "fcp" });
        }
      }
    });
    fcpObserver.observe({ type: "paint", buffered: true });
  } catch {}

  window.addEventListener("error", function (event) {
    emit({ name: "JS_ERROR", value: 1, id: event.message || "error" });
  });
})();
