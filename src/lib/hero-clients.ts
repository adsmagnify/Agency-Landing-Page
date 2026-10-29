export interface HeroClient {
  name: string;
  logo?: string;
  logoScale?: "lg";
  showName?: boolean;
}

export const heroClients: HeroClient[] = [
  { name: "Cottonking", logo: "/clients/cottonking.png" },
  { name: "Sarovar Hotels", logo: "/clients/sarovar-hotels.png" },
  { name: "Alpha Capital", logo: "/clients/alpha-capital.png" },
  { name: "ITM Institute of Design & Media", logo: "/clients/itm-idm.png" },
  { name: "Whistling Woods", logo: "/clients/whistling-woods.png" },
  { name: "Probus", logo: "/clients/probus.png" },
  { name: "SNDT Women's University", logo: "/clients/sndt.png", showName: true },
  { name: "GetPhab", logo: "/clients/getphab.png" },
  { name: "Frozen Bottle", logo: "/clients/frozen-bottle.png" },
  { name: "Lubov Bakery", logo: "/clients/lubov.png" },
  { name: "Santé Spa", logo: "/clients/sante.png", logoScale: "lg" },
  { name: "Akbar Study Abroad", logo: "/clients/akbar-study-abroad.png" },
  { name: "Ghat", logo: "/clients/ghat.png" },
  { name: "Design Jockeys", logo: "/clients/dj.jpg" },
  { name: "DDEEZ", logo: "/clients/ddeez.png" },
  { name: "Vijayraj", logo: "/clients/vijayraj.png" },
  { name: "Sassy Panda", logo: "/clients/sassy-panda.png" },
  { name: "Pizza Dude", logo: "/clients/pizza-dude.png" },
  { name: "Onboard Immigration", logo: "/clients/onboard-immigration.png" },
  { name: "Umi Matcha", logo: "/clients/umimatcha.png" },
  { name: "Bold and Bright", logo: "/clients/bold-and-bright.png" },
  { name: "SunAct", logo: "/clients/sunact.png" },
  { name: "Jeevan Sparsh", logo: "/clients/jeevan-sparsh.png" },
  { name: "NYSA School of Healthcare", logo: "/clients/nysa.png" },
  { name: "Mirage Education", logo: "/clients/mirage-education.png" },
  { name: "The Explorers", logo: "/clients/the-explorers.png" },
  { name: "Regis", logo: "/clients/regis.png" },
  { name: "Exhibetter", logo: "/clients/exhibetter.png" },
  { name: "Mobcast", logo: "/clients/mobcast.png" },
  { name: "Munshi", logo: "/clients/munshi.png" },
  { name: "Shatbdi Organics", logo: "/clients/shatbdi-organics.png" },
];
