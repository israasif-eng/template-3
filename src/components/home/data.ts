// Static content for the Supreme Dealer homepage clone. In the real builder this
// would come from the DealerSite contract; here it is inlined for the demo.

export const dealer = {
  name: "Supreme Dealer",
  address: "1200 Supreme Boulevard",
  city: "Saint-Jérôme",
  region: "QC",
  postal: "J7Z 7M2",
  phoneLabel: "450 555-0100",
  phoneHref: "tel:+14505550100",
  rating: 4.9,
  reviewCount: "14,167",
  hours: [
    { day: "Monday", value: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", value: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", value: "9:00 AM - 6:00 PM" },
    { day: "Thursday", value: "9:00 AM - 7:00 PM" },
    { day: "Friday", value: "9:00 AM - 5:00 PM" },
    { day: "Saturday", value: "Closed" },
    { day: "Sunday", value: "Closed" },
  ],
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featured?: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "vip-snowcheck-supreme-dealer-2026-event",
    title: "V.I.P. SnowCheck Supreme Dealer 2026 Event",
    date: "Feb 26, 2026",
    excerpt:
      "Attention all snowmobile enthusiasts: YOU ARE INVITED to our V.I.P. SnowCheck 2026 event, taking place on March 5 starting at 5:30 p.m., right here in store.",
    featured: true,
  },
  {
    slug: "supreme-dealer-at-the-mtl-boat-show-2026",
    title: "Supreme Dealer at the MTL Boat Show 2026",
    date: "Feb 26, 2026",
    excerpt:
      "This February, the Supreme Dealer team returns to the Palais des congrès de Montréal for the Montreal International Boat Show — and this year, we're raising the bar.",
  },
  {
    slug: "2025-black-friday-sale",
    title: "2025 Black Friday Sale",
    date: "Feb 26, 2026",
    excerpt: "The highly anticipated return of our BIGGEST DISCOUNTS OF THE YEAR is here!",
  },
  {
    slug: "montreal-boat-show",
    title: "Montreal Boat Show",
    date: "Feb 26, 2026",
    excerpt:
      "Supreme Dealer invites you to the 2025 edition of the Bateau à Flot de Montréal, taking place September 25–28, 2025, at the Old Port of Montreal.",
  },
];

export type TeamMember = { name: string; title: string; phoneLabel: string; phoneHref: string };

export const teamMembers: TeamMember[] = [
  { name: "Stéphane Sup", title: "General Manager and owner", phoneLabel: "450 555-0100 ext:225", phoneHref: "tel:+14505550100" },
  { name: "Alexandre Sup", title: "Sales Manager and owner", phoneLabel: "450 555-0100 ext:262", phoneHref: "tel:+14505550100" },
  { name: "Jonathan Sup", title: "Boat service manager and owner", phoneLabel: "450 555-0100 ext:295", phoneHref: "tel:+14505550100" },
  { name: "Régent Locas", title: "Service Manager and Owner", phoneLabel: "450 555-0100 ext:226", phoneHref: "tel:+14505550100" },
  { name: "Martin Légaré", title: "Parts manager and Owner", phoneLabel: "450 555-0100 ext:263", phoneHref: "tel:+14505550100" },
  { name: "Julie Laroche", title: "Administrative Assistant", phoneLabel: "450 555-0100 ext:237", phoneHref: "tel:+14505550100" },
];

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  {
    label: "New Vehicles",
    href: "/new",
    children: [
      { label: "All New Inventory", href: "/new" },
      { label: "Motorcycles", href: "/new?type=Motorcycle" },
      { label: "Motocross", href: "/new?type=Motorcycle" },
      { label: "Scooters", href: "/new?type=Motorcycle" },
      { label: "3-Wheel Vehicles", href: "/new?type=Side-by-Side" },
      { label: "Slingshot", href: "/new?type=Side-by-Side" },
      { label: "ATVs", href: "/new?type=ATV" },
      { label: "Side-by-Sides", href: "/new?type=Side-by-Side" },
      { label: "Snowmobiles", href: "/new?type=Snowmobile" },
      { label: "Watercraft", href: "/new?type=Watercraft" },
      { label: "Sport Boats", href: "/new?type=Boat" },
      { label: "Pontoons", href: "/new?type=Boat" },
      { label: "Fishing Boats", href: "/new?type=Boat" },
      { label: "Outboard Motors", href: "/new?type=Outboard Motor" },
      { label: "Trailers", href: "/new?type=Trailer" },
    ],
  },
  {
    label: "Used Vehicles",
    href: "/used",
    children: [
      { label: "All Used Inventory", href: "/used" },
      { label: "Motorcycles", href: "/used?type=Motorcycle" },
      { label: "ATVs", href: "/used?type=ATV" },
      { label: "Side-by-Sides", href: "/used?type=Side-by-Side" },
      { label: "Snowmobiles", href: "/used?type=Snowmobile" },
      { label: "Watercraft", href: "/used?type=Watercraft" },
      { label: "Fishing Boats", href: "/used?type=Fishing Boats" },
      { label: "Pontoons", href: "/used?type=Pontoon" },
      { label: "Trailers", href: "/used?type=Trailer" },
    ],
  },
  {
    label: "Financial Services",
    href: "/financing",
    children: [
      { label: "Financing", href: "/financing" },
      { label: "Dealer Financing", href: "/financing/dealer" },
    ],
  },
  { label: "Promotions", href: "/promotions" },
  {
    label: "Service & Parts",
    href: "/service",
    children: [
      { label: "Maintenance", href: "/service" },
      { label: "Parts & Accessories", href: "/parts" },
      { label: "Order Parts Online", href: "/parts/order" },
      { label: "Request Service", href: "/service/request" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Our Team", href: "/team" },
    ],
  },
];

export type TypeTab = { title: string; seeAll: string; models: { label: string }[] };

export const typeTabs: TypeTab[] = [
  {
    title: "Road",
    seeAll: "See All On-Road Inventory",
    models: [
      { label: "Cruiser Motorcycles" },
      { label: "Sport Motorcycles" },
      { label: "Dual Purpose" },
      { label: "Scooters" },
      { label: "3-Wheelers" },
    ],
  },
  {
    title: "Off-Road",
    seeAll: "See All Off-Road Inventory",
    models: [
      { label: "Dirt Bikes" },
      { label: "ATVs" },
      { label: "Sport ATVs" },
      { label: "Side-by-Sides" },
      { label: "Utility SxS" },
    ],
  },
  {
    title: "Marine",
    seeAll: "See All Marine Products",
    models: [
      { label: "Watercraft" },
      { label: "Sport Boats" },
      { label: "Pontoons" },
      { label: "Fishing Boats" },
      { label: "Outboard Motors" },
    ],
  },
  {
    title: "Utility",
    seeAll: "See All Utility Inventory",
    models: [
      { label: "Golf Carts" },
      { label: "Generators" },
      { label: "Snowblowers" },
      { label: "Trailers" },
      { label: "Boat Lifts" },
    ],
  },
  {
    title: "Snowmobiles",
    seeAll: "See All Snowmobiles",
    models: [
      { label: "Trail Snowmobiles" },
      { label: "Crossover" },
      { label: "Mountain" },
      { label: "Utility" },
      { label: "Youth" },
    ],
  },
];

export type Brand = { name: string; logo?: string; big?: boolean; xl?: boolean };

export const brands: Brand[] = [
  { name: "Adly", logo: "/brands/adly.jpg" },
  { name: "Avalon", logo: "/brands/avalon.png", xl: true },
  { name: "G3 Boats", logo: "/brands/g3-boats.jpg", big: true },
  { name: "Indian Motorcycle", logo: "/brands/indian-motorcycle.png", big: true },
  { name: "Lund", big: true },
  { name: "Mercury", logo: "/brands/mercury.jpg", big: true },
  { name: "Polaris", logo: "/brands/polaris.png", big: true },
  { name: "Skeeter", logo: "/brands/skeeter.png", xl: true },
  { name: "Slingshot", logo: "/brands/slingshot.png", xl: true },
  { name: "SunCatcher", logo: "/brands/suncatcher.jpg" },
  { name: "Yamaha", logo: "/brands/yamaha.png", big: true },
];

export type Vehicle = {
  year: string;
  make: string;
  title: string;
  stock: string;
  photos: number;
  listPrice: string;
  savings: string;
  salePrice: string;
  img: string;
};

export const featured: Vehicle[] = [
  {
    year: "2025",
    make: "Yamaha",
    title: "222 FSH Sport E",
    stock: "250625",
    photos: 20,
    listPrice: "140,999",
    savings: "28,000",
    salePrice: "112,999",
    img: "https://picsum.photos/seed/sd-veh-boat1/800/600",
  },
  {
    year: "2025",
    make: "Skeeter",
    title: "WXR2060 + Yamaha VF250 VMAX SHO",
    stock: "250800",
    photos: 30,
    listPrice: "169,999",
    savings: "40,000",
    salePrice: "129,999",
    img: "https://picsum.photos/seed/sd-veh-boat2/800/600",
  },
  {
    year: "2026",
    make: "Lund",
    title: "1775 Crossover XS + Mercury 115 HP & Trailer",
    stock: "260407",
    photos: 27,
    listPrice: "110,999",
    savings: "24,000",
    salePrice: "86,999",
    img: "https://picsum.photos/seed/sd-veh-boat3/800/600",
  },
];

export const slides = [
  { title: "All-Out Summer Sales Event", img: "https://picsum.photos/seed/sd-slide1/1920/720" },
  { title: "Adventure Awaits — ATVs", img: "https://picsum.photos/seed/sd-slide2/1920/720" },
  { title: "2025 Slingshot Models", img: "https://picsum.photos/seed/sd-slide3/1920/720" },
  { title: "Explore the Snowmobile Lineup", img: "https://picsum.photos/seed/sd-slide4/1920/720" },
  { title: "Flexible Financing Available", img: "https://picsum.photos/seed/sd-slide5/1920/720" },
];

export type Review = { name: string; location: string; date: string; text: string };

export type InventoryItem = {
  id: string;
  condition: "new" | "used";
  type: string;
  category: string;
  make: string;
  year: number;
  title: string;
  stock: string;
  photos: number;
  salePrice: number;
  listPrice?: number;
  usage?: string;
  img: string;
};

const inv = (seed: string) => `https://picsum.photos/seed/${seed}/800/600`;

export const inventory: InventoryItem[] = [
  { id: "1", condition: "new", type: "Snowmobile", category: "Trail", make: "Polaris", year: 2027, title: "9R RMK PRO 165 SNOWCHECK", stock: "S27TGM9BS", photos: 12, salePrice: 26739, img: inv("sd-inv-1") },
  { id: "2", condition: "new", type: "Snowmobile", category: "Trail", make: "Polaris", year: 2027, title: "850 INDY XC 137 - 7S", stock: "S27TDP8RSS", photos: 8, salePrice: 22939, img: inv("sd-inv-2") },
  { id: "3", condition: "new", type: "Motorcycle", category: "Cruiser", make: "Indian Motorcycle", year: 2026, title: "Chief Dark Horse", stock: "M26ICH01", photos: 18, salePrice: 24499, img: inv("sd-inv-3") },
  { id: "4", condition: "new", type: "Motorcycle", category: "Bagger", make: "Indian Motorcycle", year: 2026, title: "Chieftain Limited", stock: "M26ICL02", photos: 22, salePrice: 32999, img: inv("sd-inv-4") },
  { id: "5", condition: "new", type: "ATV", category: "Utility", make: "Yamaha", year: 2026, title: "Grizzly 700 EPS", stock: "A26YGZ07", photos: 14, salePrice: 15299, img: inv("sd-inv-5") },
  { id: "6", condition: "new", type: "Side-by-Side", category: "Sport", make: "Polaris", year: 2026, title: "RZR Pro XP Ultimate", stock: "X26PRZ99", photos: 26, salePrice: 41999, img: inv("sd-inv-6") },
  { id: "7", condition: "new", type: "Watercraft", category: "Recreational", make: "Yamaha", year: 2026, title: "WaveRunner VX Cruiser HO", stock: "W26YVX10", photos: 16, salePrice: 17899, img: inv("sd-inv-7") },
  { id: "8", condition: "new", type: "Boat", category: "Fishing Boats", make: "Lund", year: 2026, title: "1775 Crossover XS + Mercury 115", stock: "B26LUN17", photos: 27, salePrice: 86999, img: inv("sd-inv-8") },
  { id: "9", condition: "new", type: "Boat", category: "Pontoon", make: "Avalon", year: 2026, title: "Venture Cruise 23", stock: "B26AVC23", photos: 19, salePrice: 64999, img: inv("sd-inv-9") },
  { id: "10", condition: "new", type: "Outboard Motor", category: "75 to 150 HP", make: "Mercury", year: 2026, title: "115 HP FourStroke", stock: "O26MRC11", photos: 6, salePrice: 13499, img: inv("sd-inv-10") },
  { id: "11", condition: "new", type: "Motorcycle", category: "Sport", make: "Yamaha", year: 2026, title: "YZF-R7", stock: "M26YR7X3", photos: 20, salePrice: 12499, img: inv("sd-inv-11") },
  { id: "12", condition: "new", type: "Snowmobile", category: "Mountain", make: "Polaris", year: 2027, title: "850 RMK SPS 165 - 7S", stock: "S27TGA8RSF", photos: 10, salePrice: 22639, img: inv("sd-inv-12") },
];

export const usedInventory: InventoryItem[] = [
  { id: "u1", condition: "used", type: "Outboard Motor", category: "2.5 to 25 HP", make: "Mercury", year: 2026, title: "25ELH Electric Start, Long Shaft (20\")", stock: "45645A", photos: 10, salePrice: 4999, img: inv("sd-used-1") },
  { id: "u2", condition: "used", type: "Motorcycle", category: "Dual Purpose", make: "Yamaha", year: 2026, title: "WR125R", stock: "260607", photos: 13, salePrice: 5999, usage: "2 km", img: inv("sd-used-2") },
  { id: "u3", condition: "used", type: "Motorcycle", category: "Scooter", make: "Yamaha", year: 2025, title: "BWS 125", stock: "U0139", photos: 13, salePrice: 3999, usage: "155 km", img: inv("sd-used-3") },
  { id: "u4", condition: "used", type: "Pontoon", category: "Pontoon", make: "Avalon", year: 2025, title: "1980 VTX Cruise + Yamaha 40 HP", stock: "250999A", photos: 23, salePrice: 39999, img: inv("sd-used-4") },
  { id: "u5", condition: "used", type: "Motorcycle", category: "Cruiser", make: "Indian Motorcycle", year: 2025, title: "Scout Bobber Limited +Tech", stock: "251155A", photos: 13, salePrice: 17999, usage: "3,460 km", img: inv("sd-used-5") },
  { id: "u6", condition: "used", type: "Fishing Boats", category: "Fishing Boats", make: "Smoker-Craft", year: 2025, title: "Pro Sportsman 1872 TL + Yamaha V-MAX 90 HP", stock: "45028A", photos: 17, salePrice: 47999, listPrice: 49999, usage: "40 hours", img: inv("sd-used-6") },
  { id: "u7", condition: "used", type: "ATV", category: "Utility", make: "Polaris", year: 2025, title: "Sportsman X2 570", stock: "260606A", photos: 11, salePrice: 13699, usage: "921 km", img: inv("sd-used-7") },
  { id: "u8", condition: "used", type: "Fishing Boats", category: "Fishing Boats", make: "G3 Boats", year: 2025, title: "AV164F + Yamaha V-MAX 90 HP & Trailer", stock: "261152A", photos: 24, salePrice: 49999, img: inv("sd-used-8") },
  { id: "u9", condition: "used", type: "Trailer", category: "Trailers", make: "Maxi-Roule", year: 2025, title: "Maxi-Roule SM60144", stock: "U0130", photos: 12, salePrice: 2599, img: inv("sd-used-9") },
  { id: "u10", condition: "used", type: "ATV", category: "Touring", make: "Polaris", year: 2025, title: "Sportsman Touring 570 Premium", stock: "U0129", photos: 11, salePrice: 14699, listPrice: 14999, usage: "496 km", img: inv("sd-used-10") },
  { id: "u11", condition: "used", type: "Motorcycle", category: "Bagger", make: "Indian Motorcycle", year: 2025, title: "Chieftain PowerPlus Dark Horse", stock: "260429A", photos: 14, salePrice: 33699, listPrice: 36999, usage: "21,750 km", img: inv("sd-used-11") },
  { id: "u12", condition: "used", type: "Motorcycle", category: "Sport", make: "Yamaha", year: 2025, title: "MT-10 SP", stock: "U0158", photos: 13, salePrice: 20699, usage: "1,240 km", img: inv("sd-used-12") },
];

export const specialOffers = [
  { title: "Adventure Awaits Sales Event — Side-by-Sides", img: "https://picsum.photos/seed/sd-offer1/1000/560" },
  { title: "Summer Savings on the Scout Family", img: "https://picsum.photos/seed/sd-offer2/1000/560" },
];

export type Promotion = {
  id: string;
  title: string;
  dateRange: string;
  make: string;
  type: string;
  department: string;
  disclaimer: string;
};

export const promotions: Promotion[] = [
  { id: "p1", title: "All-Out Summer Sales Event", dateRange: "June 1, 2026 to July 31, 2026", make: "Polaris", type: "Side-by-Side", department: "New vehicles", disclaimer: "Up to $4,000 off select 2026 off-road vehicles. See dealer for details." },
  { id: "p2", title: "All-Out Summer Sales Event — Parts", dateRange: "June 1, 2026 to July 31, 2026", make: "Polaris", type: "ATV", department: "Parts and accessories", disclaimer: "20% off storage accessories, wheels and tires, and Pro series parts." },
  { id: "p3", title: "Get on the Water Now Sales Event — WaveRunner", dateRange: "July 1, 2026 to July 31, 2026", make: "Yamaha", type: "Watercraft", department: "New vehicles", disclaimer: "Special pricing on select WaveRunner models. See dealer for details." },
  { id: "p4", title: "All Out Summer — 2025 Slingshot R Models", dateRange: "July 1, 2026 to July 31, 2026", make: "Slingshot", type: "Three-Wheel", department: "New vehicles", disclaimer: "Offer valid on select 2025 Slingshot R models while quantities last." },
  { id: "p5", title: "All Out Summer — 2025 Slingshot SL & SLR Models", dateRange: "July 1, 2026 to July 31, 2026", make: "Slingshot", type: "Three-Wheel", department: "New vehicles", disclaimer: "Offer valid on select 2025 Slingshot SL & SLR models while quantities last." },
  { id: "p6", title: "Adventure Awaits Sales Event — Side-by-Sides", dateRange: "June 1, 2026 to July 31, 2026", make: "Polaris", type: "Side-by-Side", department: "New vehicles", disclaimer: "Save on select side-by-side models. See dealer for details." },
  { id: "p7", title: "Adventure Awaits Sales Event — ATVs", dateRange: "June 1, 2026 to July 31, 2026", make: "Yamaha", type: "ATV", department: "New vehicles", disclaimer: "Save on select ATV models. See dealer for details." },
  { id: "p8", title: "MY25 Chief", dateRange: "July 1, 2026 to July 31, 2026", make: "Indian Motorcycle", type: "Motorcycle", department: "New vehicles", disclaimer: "Special pricing on remaining 2025 Chief models. See dealer for details." },
  { id: "p9", title: "MY25 Scout Family", dateRange: "July 1, 2026 to July 31, 2026", make: "Indian Motorcycle", type: "Motorcycle", department: "New vehicles", disclaimer: "Special pricing on the 2025 Scout family. See dealer for details." },
  { id: "p10", title: "MY25 Cruiser & Bagger Event", dateRange: "July 1, 2026 to July 31, 2026", make: "Indian Motorcycle", type: "Motorcycle", department: "New vehicles", disclaimer: "Limited-time offers on select cruiser and bagger models." },
  { id: "p11", title: "All Out Summer — 2026 Slingshot Models", dateRange: "July 1, 2026 to July 31, 2026", make: "Slingshot", type: "Three-Wheel", department: "New vehicles", disclaimer: "Offer valid on select 2026 Slingshot models. See dealer for details." },
  { id: "p12", title: "Summer Ride Financing Event", dateRange: "June 1, 2026 to July 31, 2026", make: "Yamaha", type: "Watercraft", department: "General", disclaimer: "Competitive financing rates on select models. On approved credit." },
];

// Attribution for the hero 3D models. All are Sketchfab models under
// CC BY 4.0, which requires crediting the author and linking the license.
export type ModelCredit = {
  title: string;
  modelUrl: string;
  author: string;
  authorUrl: string;
  license: string;
  licenseUrl: string;
};

export const modelCredits: ModelCredit[] = [
  {
    title: "Sports Bike",
    modelUrl:
      "https://sketchfab.com/3d-models/sports-bike-a80259b859c842d5824c25c61e0fc421",
    author: "Futurealiti",
    authorUrl: "https://sketchfab.com/futurealiti",
    license: "CC BY 4.0",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
  },
  {
    title: "SDC Snowbike Motor",
    modelUrl:
      "https://sketchfab.com/3d-models/free-sdc-snowbike-motor-3daf3197a24448a6903d54a96bb4786c",
    author: "SDC PERFORMANCE™️",
    authorUrl: "https://sketchfab.com/3Duae",
    license: "CC BY 4.0",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
  },
  {
    title: "Suzuki Quadzilla 500",
    modelUrl:
      "https://sketchfab.com/3d-models/suzuki-quadzilla-500-2eb658cc24074f158e47395493bd6308",
    author: "RES1N",
    authorUrl: "https://sketchfab.com/Resinnnn",
    license: "CC BY 4.0",
    licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
  },
];

export const reviews: Review[] = [
  { name: "Alain C.", location: "Mirabel", date: "yesterday", text: "The staff is courteous and professional. Very good service throughout." },
  { name: "Claude B.", location: "Saint-Eustache", date: "yesterday", text: "Excellent service from the first visit to delivery. Friendly, knowledgeable team." },
  { name: "Pierre-Luc L.", location: "Val-David", date: "2 days ago", text: "Great experience with my salesperson — courteous, attentive, and efficient." },
  { name: "Yves C.", location: "Gatineau", date: "3 days ago", text: "Super welcoming when we arrived. A huge selection of ATVs and motorcycles." },
  { name: "Yvon D.", location: "Lachute", date: "3 days ago", text: "A representative from every department helped us with all our questions." },
  { name: "Sylvain S.", location: "Amherst", date: "4 days ago", text: "The sales team explained everything clearly. Thanks for a smooth purchase!" },
  { name: "Pierre R.", location: "Saint-Jean", date: "4 days ago", text: "The whole team made buying my new bike simple and enjoyable. Highly recommend." },
  { name: "Ginette P.", location: "Val-des-Monts", date: "5 days ago", text: "Great service from all the staff. A big thank you to everyone!" },
];
