/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          black: "#000",
          limegreen: {
            "100": "#82f96f",
            "200": "#13c224",
            "300": "#15af02",
            "400": "rgba(21, 175, 2, 0.7)",
          },
          darkgreen: "#104e08",
          gray: {
            "100": "#fcfffc",
            "200": "#0e0e0e",
            "300": "#0b0b0b",
            "400": "rgba(0, 0, 0, 0.5)",
            "500": "rgba(0, 0, 0, 0.57)",
            "600": "rgba(0, 0, 0, 0.6)",
          },
          forestgreen: {
            "100": "#5bb450",
            "200": "#359c1b",
          },
        },
        spacing: {},
        fontFamily: {
          poppins: "Poppins",
          inter: "Inter",
        },
        borderRadius: {
          xl: "20px",
          "11xl": "30px",
        },
      },
      fontSize: {
        "13xl": "32px",
        lgi: "19px",
        "7xl": "26px",
        "26xl": "45px",
        "8xl": "27px",
        "17xl": "36px",
        "51xl": "70px",
        "23xl": "42px",
        "37xl": "56px",
        "21xl": "40px",
        "5xl": "24px",
        xl: "20px",
        "6xl": "25px",
        "16xl": "35px",
        "11xl": "30px",
        lg: "18px",
        inherit: "inherit",
      },
      screens: {
        mq1450: {
          raw: "screen and (max-width: 1450px)",
        },
        lg: {
          max: "1200px",
        },
        mq825: {
          raw: "screen and (max-width: 825px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  