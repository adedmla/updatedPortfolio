(function () {
  const pre = document.getElementById("donut");

  if (pre) {
    let A = 1,
      B = 1;

    function renderFrame() {
      const b = [];
      const z = [];

      for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 === 79 ? "\n" : " ";
        z[k] = 0;
      }

      for (let j = 0; j < 628; j += 7) {
        for (let i = 0; i < 628; i += 2) {
          const c = Math.sin(i);
          const d = Math.cos(j);
          const e = Math.sin(A);
          const f = Math.sin(j);
          const g = Math.cos(A);
          const h = d + 2;
          const D = 1 / (c * h * e + f * g + 5);
          const l = Math.cos(i);
          const m = Math.cos(B);
          const n = Math.sin(B);
          const t = c * h * g - f * e;

          const x = Math.floor(40 + 30 * D * (l * h * m - t * n));
          const y = Math.floor(12 + 15 * D * (l * h * n + t * m));
          const o = Math.floor(x + 80 * y);
          const N = Math.floor(
            8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n)
          );

          if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
          }
        }
      }

      pre.innerHTML = b.join("");
    }

    function animate() {
      A += 0.04;
      B += 0.02;
      renderFrame();
      setTimeout(animate, 50);
    }

    animate();
  }
})();

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileNavOverlay = document.getElementById("mobileNavOverlay");

  if (mobileMenuToggle && mobileNavOverlay) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenuToggle.classList.toggle("active");
      mobileNavOverlay.classList.toggle("active");
      document.body.style.overflow = mobileNavOverlay.classList.contains(
        "active"
      )
        ? "hidden"
        : "";
    });

    mobileNavOverlay.addEventListener("click", function (e) {
      if (e.target === mobileNavOverlay) {
        mobileMenuToggle.classList.remove("active");
        mobileNavOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });

    const mobileNavLinks = document.querySelectorAll(
      ".mobile-nav .navbar__link"
    );
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenuToggle.classList.remove("active");
        mobileNavOverlay.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }
});
