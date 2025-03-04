import { writable } from "svelte/store";


export const navLinks = writable([
    {
      title: "Repayment Agreement policy",
      link: "/repayment-agreement-policy",
    },
    {
      title: "Daily Routine",
      link: "/daily-routine",
    },
    {
      title: "Contact info",
      link: "/contact",
    },
    {
      title: "Supplies provided by parents",
      link: "/supplies-provided-by-parents",
    },
    {
      title: "Address",
      // link: "https://maps.app.goo.gl/P1vmGtKnmb5GQPy68",
    },
  ])