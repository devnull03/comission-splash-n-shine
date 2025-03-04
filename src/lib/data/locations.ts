export interface LocationData {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string[];
  services: string[];
  faqItems: FaqItem[];
  mapEmbedUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const locationsData: Record<string, LocationData> = {
  'north-vancouver': {
    name: 'North Vancouver',
    address: '123 Lonsdale Ave, North Vancouver, BC V7M 2E9',
    phone: '(604) 555-1234',
    email: 'northvancouver@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 4pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'epoxy-flooring'
    ],
    faqItems: [
      {
        question: 'How long does a concrete coating installation take?',
        answer: 'Most installations can be completed within 2-3 days, depending on the size and complexity of the project.'
      },
      {
        question: 'Are your coatings suitable for the wet North Vancouver climate?',
        answer: 'Yes, our premium coatings are specially formulated to withstand the rainy conditions of the North Shore, providing excellent moisture resistance.'
      },
      {
        question: 'Do you offer free estimates?',
        answer: 'Absolutely! We provide free on-site consultations and estimates for all our services in North Vancouver and surrounding areas.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.81388963776!2d-123.1351363486536!3d49.32345351472004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54866fd300d26b6b%3A0x8e0f4afee044c407!2sNorth%20Vancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1686753526543!5m2!1sen!2sca'
  },
  'vancouver': {
    name: 'Vancouver',
    address: '456 Granville St, Vancouver, BC V6C 1T2',
    phone: '(604) 555-2345',
    email: 'vancouver@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 4pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'epoxy-flooring',
      'pool-deck-resurfacing'
    ],
    faqItems: [
      {
        question: 'Do your services comply with Vancouver\'s environmental regulations?',
        answer: 'Yes, all our products and methods are eco-friendly and fully compliant with Vancouver\'s strict environmental standards.'
      },
      {
        question: 'How durable are your concrete coatings in high-traffic areas?',
        answer: 'Our concrete coatings are designed for maximum durability, even in high-traffic commercial spaces throughout Vancouver.'
      },
      {
        question: 'Can you work on heritage buildings in Vancouver?',
        answer: 'Absolutely! We have specialized experience working with heritage buildings, ensuring our services preserve the historic character while providing modern protection.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83328.40223050613!2d-123.19394584865358!3d49.32306851472005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1686753626543!5m2!1sen!2sca'
  },
  'coquitlam': {
    name: 'Coquitlam',
    address: '789 Pinetree Way, Coquitlam, BC V3B 7Y3',
    phone: '(604) 555-3456',
    email: 'coquitlam@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 3pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'commercial-services'
    ],
    faqItems: [
      {
        question: 'Do you service all areas of Coquitlam?',
        answer: 'Yes, we provide our full range of services throughout Coquitlam, including Burke Mountain, Westwood Plateau, and Maillardville.'
      },
      {
        question: 'What preparation is needed before you arrive to coat my concrete?',
        answer: 'We handle all the preparation! Our team will clean, repair, and prepare your concrete surface before applying our premium coatings.'
      },
      {
        question: 'How soon can I use my garage after a coating application?',
        answer: 'Light foot traffic is typically possible after 24 hours, but we recommend waiting 48-72 hours before parking vehicles on your newly coated surface.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83279.52624564167!2d-122.83410484864313!3d49.35156851470723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867f29e2dc7c8d%3A0x367b4b9848e36c08!2sCoquitlam%2C%20BC!5e0!3m2!1sen!2sca!4v1686753726543!5m2!1sen!2sca'
  },
  'burnaby': {
    name: 'Burnaby',
    address: '101 Kingsway, Burnaby, BC V5H 2E7',
    phone: '(604) 555-4567',
    email: 'burnaby@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 4pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'epoxy-flooring',
      'commercial-services'
    ],
    faqItems: [
      {
        question: 'Can you match my existing home colors for concrete coatings?',
        answer: 'Yes! We offer custom color matching to ensure your new concrete coating complements your home\'s existing color scheme perfectly.'
      },
      {
        question: 'How often should I pressure wash my home in Burnaby?',
        answer: 'Due to Burnaby\'s climate, we recommend pressure washing your home exterior and driveway once a year to prevent moss and mildew buildup.'
      },
      {
        question: 'Do you offer warranties on your work?',
        answer: 'Yes, all our services come with comprehensive warranties. Our concrete coatings carry a 10-year warranty against peeling and flaking.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83310.98332235441!2d-123.02513284864965!3d49.33232851471503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486765f8d1e139d%3A0xb4eba2cb6df21a7a!2sBurnaby%2C%20BC!5e0!3m2!1sen!2sca!4v1686753826543!5m2!1sen!2sca'
  },
  'richmond': {
    name: 'Richmond',
    address: '5300 No. 3 Rd, Richmond, BC V6X 2X9',
    phone: '(604) 555-5678',
    email: 'richmond@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 4pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'commercial-services',
      'pool-deck-resurfacing'
    ],
    faqItems: [
      {
        question: 'Are your concrete coatings suitable for Richmond\'s high water table environment?',
        answer: 'Yes, our specialized coatings are designed with moisture mitigation systems to handle Richmond\'s unique ground conditions.'
      },
      {
        question: 'How do your coatings perform in winter conditions?',
        answer: 'Our concrete coatings are formulated to resist freeze-thaw cycles, making them ideal for Richmond\'s occasional winter freezes.'
      },
      {
        question: 'Do you provide services for commercial properties?',
        answer: 'Absolutely! We serve many businesses throughout Richmond with our commercial-grade coatings and pressure washing services.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83363.97416502373!2d-123.16863984866094!3d49.30157851472764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860aa96a3a0817%3A0xd5a9c16e84833e2f!2sRichmond%2C%20BC!5e0!3m2!1sen!2sca!4v1686753926543!5m2!1sen!2sca'
  },
  'delta': {
    name: 'Delta',
    phone: '(604) 555-6789',
    address: '4500 Clarence Taylor Crescent, Delta, BC V4K 3E2',
    email: 'delta@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 3pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'epoxy-flooring'
    ],
    faqItems: [
      {
        question: 'Do you service all areas of Delta (North Delta, Ladner, Tsawwassen)?',
        answer: 'Yes, we provide our services throughout all Delta communities including North Delta, Ladner, and Tsawwassen.'
      },
      {
        question: 'How do your coatings hold up against Delta\'s agricultural environments?',
        answer: 'Our coatings are specifically designed to withstand rural and agricultural conditions, providing excellent protection against farm chemicals and equipment.'
      },
      {
        question: 'Can your pressure washing services help with the salt residue from Boundary Bay?',
        answer: 'Absolutely! Our specialized pressure washing techniques effectively remove salt residue that commonly affects properties near Boundary Bay.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83417.63707249666!2d-123.09327984866965!3d49.2718085147361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485df46439b8cd5%3A0x436ce2f10a415aa4!2sDelta%2C%20BC!5e0!3m2!1sen!2sca!4v1686754026543!5m2!1sen!2sca'
  },
  'new-westminster': {
    name: 'New Westminster',
    address: '511 Royal Ave, New Westminster, BC V3L 1H9',
    phone: '(604) 555-7890',
    email: 'newwest@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 4pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'epoxy-flooring'
    ],
    faqItems: [
      {
        question: 'Do you have experience working with New Westminster\'s heritage homes?',
        answer: 'Yes, we have extensive experience with heritage properties and understand the unique requirements and restrictions for working on New Westminster\'s historic homes.'
      },
      {
        question: 'How long do your concrete coatings last in New Westminster\'s climate?',
        answer: 'Our premium concrete coatings typically last 15-20 years in New Westminster\'s climate, even with proper care and maintenance.'
      },
      {
        question: 'Can you help with strata approvals for condo buildings?',
        answer: 'Absolutely! We regularly work with strata councils throughout New Westminster and can provide all the documentation needed for approval of our services.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41637.946891384164!2d-122.93149597407684!3d49.2065753559755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d872a8aa9d29%3A0x5abe2469a364a873!2sNew%20Westminster%2C%20BC!5e0!3m2!1sen!2sca!4v1686754126543!5m2!1sen!2sca'
  },
  'surrey': {
    name: 'Surrey',
    address: '13450 104 Ave, Surrey, BC V3T 1V8',
    phone: '(604) 555-8901',
    email: 'surrey@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 4pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'epoxy-flooring',
      'commercial-services'
    ],
    faqItems: [
      {
        question: 'Do you service all of Surrey\'s neighborhoods?',
        answer: 'Yes, we provide our services throughout Surrey including Fleetwood, Guildford, Newton, Cloverdale, South Surrey, and Whalley.'
      },
      {
        question: 'What makes your concrete coatings better than regular paint?',
        answer: 'Unlike paint, our coatings penetrate and bond with the concrete, providing superior durability, stain resistance, and longevity—especially important in Surrey\'s variable climate.'
      },
      {
        question: 'Do you offer multi-property discounts for townhouse complexes?',
        answer: 'Yes, we offer special pricing for multi-unit properties and have worked with many townhouse complexes throughout Surrey.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167379.4175297693!2d-122.95153133671083!3d49.130768936213454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485dc034d3fa75f%3A0x4bb14709d3aca4d!2sSurrey%2C%20BC!5e0!3m2!1sen!2sca!4v1686754226543!5m2!1sen!2sca'
  },
  'white-rock': {
    name: 'White Rock',
    address: '15151 Russell Ave, White Rock, BC V4B 2P4',
    phone: '(604) 555-9012',
    email: 'whiterock@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 3pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'pool-deck-resurfacing'
    ],
    faqItems: [
      {
        question: 'Are your coatings suitable for oceanfront properties in White Rock?',
        answer: 'Yes, our specialized coatings are formulated to withstand the salt air and unique conditions of White Rock\'s oceanfront environment.'
      },
      {
        question: 'How often should I have my deck pressure washed in White Rock?',
        answer: 'Due to White Rock\'s proximity to the ocean, we recommend pressure washing decks and exteriors every 6-12 months to prevent salt buildup and maintain their appearance.'
      },
      {
        question: 'Can you match specific colors for my pool deck?',
        answer: 'Absolutely! We offer custom color matching to ensure your pool deck complements your home and landscaping perfectly.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41763.62596031238!2d-122.84254997413935!3d49.02525035627696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c376324c14e1%3A0x1dbd6b6d51d33123!2sWhite%20Rock%2C%20BC!5e0!3m2!1sen!2sca!4v1686754326543!5m2!1sen!2sca'
  },
  'langley': {
    name: 'Langley',
    address: '20399 Douglas Crescent, Langley, BC V3A 4B3',
    phone: '(604) 555-0123',
    email: 'langley@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 4pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'epoxy-flooring',
      'commercial-services'
    ],
    faqItems: [
      {
        question: 'Do you service both Langley City and Township?',
        answer: 'Yes, we provide our full range of services throughout both Langley City and Langley Township.'
      },
      {
        question: 'Are your coatings suitable for horse barns and agricultural buildings?',
        answer: 'Absolutely! We offer specialized coatings designed specifically for agricultural applications that are common in Langley\'s rural areas.'
      },
      {
        question: 'How do you handle the application process during Langley\'s rainy seasons?',
        answer: 'We carefully monitor weather conditions and schedule installations during optimal weather windows. For garage floors and interior work, we can work year-round regardless of weather.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167201.09669261117!2d-122.67669533667464!3d49.16517393605778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d343544af92b%3A0x65c8feeb282f3822!2sLangley%2C%20BC!5e0!3m2!1sen!2sca!4v1686754426543!5m2!1sen!2sca'
  },
  'abbotsford': {
    name: 'Abbotsford',
    address: '32315 South Fraser Way, Abbotsford, BC V2T 1W7',
    phone: '(604) 555-1234',
    email: 'abbotsford@splashnshine.com',
    hours: [
      'Monday - Friday: 8am - 6pm',
      'Saturday: 9am - 3pm',
      'Sunday: Closed'
    ],
    services: [
      'concrete-coatings',
      'pressure-washing',
      'epoxy-flooring',
      'commercial-services'
    ],
    faqItems: [
      {
        question: 'Do you provide services to rural properties in Abbotsford?',
        answer: 'Yes, we service all areas of Abbotsford including rural properties, farms, and agricultural facilities.'
      },
      {
        question: 'How do your coatings perform in Abbotsford\'s agricultural environment?',
        answer: 'Our coatings are specifically formulated to withstand the unique challenges of agricultural environments, including resistance to farm chemicals and equipment.'
      },
      {
        question: 'Can you provide service to businesses in Abbotsford?',
        answer: 'Absolutely! We serve many commercial and industrial clients throughout Abbotsford with our heavy-duty commercial-grade coatings and services.'
      }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167008.20753004064!2d-122.39011033663718!3d49.20161393596547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485b89ed467c693%3A0x94053fa33354c6e5!2sAbbotsford%2C%20BC!5e0!3m2!1sen!2sca!4v1686754526543!5m2!1sen!2sca'
  }
};



