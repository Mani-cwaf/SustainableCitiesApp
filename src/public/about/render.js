for (const link of document.querySelectorAll(".nav-link")) {
    link.onmousemove = e => {
        const decimal = e.clientX / link.offsetWidth;

        const basePercent = 80,
            percentRange = 20,
            adjustablePercent = percentRange * decimal;

        const lightgreenPercent = basePercent + adjustablePercent;

        link.style.setProperty("--light-green-percent", `${lightgreenPercent}%`);
    }
}