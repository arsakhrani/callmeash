export type Stack = {
  tech: string;
  url: string;
};

export type Data = {
  id: number;
  name: string;
  subtitle: string;
  secondaryImage: string;
  heroImage: string;
  href: string;
  tags: Stack[];
  featureStatement: string;
  idea: string[];
  projectLink: string | null;
  githubLink: string | null;
  carouselImages: string[];
};

export const projectData: Data[] = [
  {
    id: 0,
    name: "Picket",
    subtitle: "Making decisions social",
    href: "/work/picket",
    featureStatement: "Time to start making decisions social.",
    tags: [
      { tech: "TypeScript", url: "https://www.typescriptlang.org/" },
      { tech: "React Native", url: "https://reactnative.dev/" },
      { tech: "Expo", url: "https://expo.dev/" },
      { tech: "Python", url: "https://www.python.org/" },
      { tech: "Django", url: "https://www.djangoproject.com/" },
      { tech: "MySQL", url: "https://www.mysql.com/" },
    ],
    secondaryImage:
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436722/Picket/Picket_-_KEY_IMAGE_eotrrn.png",
    heroImage:
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436714/Picket/Picket_-_THUMBNAIL_HEADER_qr6q60.png",
    idea: [
      "What should I wear, Nike or Adidas? Where should I study, Harvard or Oxford? Where should I move to, Paris or Berlin? Okay to be honest the idea for this app started with 'What should I eat for dinner, Mc Donalds or Burger King?'",
      "My cousin, Krish, like many other people could not decide what to eat for dinner that night and thought to himself that it would be nice to have an app where he could poll his friends and have them pick what he should have for dinner.",
      "Being a computer science major student at the University of Virginia he figured it would be a great idea to make this app for his end of the year project. While he handled all the back end tasks he told me about his idea and asked if my wife and I would be interested in joining the team to take lead on the front end of the project. We loved the idea, so Hannah, my wife, started designing prototypes and I started a new react-native project.",
      "I have worked on react-native projects before but this would be the first one I took the lead of from start to finish. Having experience with react since 2020, react-native along with expo allowed for a fairly intuitive and seamless approach to the project. Deploying the project on the google play store and apple app store proved to be the more difficult challenge. But with enough trial and error the app has finally been deployed on both stores as early access.",
    ],
    projectLink:
      "https://play.google.com/store/apps/details?id=com.floatingheads.picket",
    githubLink: "https://github.com/Krish1903/DecisionApp-frontend",
    carouselImages: [
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436712/Picket/Picket_-_CAROUSEL_-_1_yjxe2b.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436720/Picket/Picket_-_CAROUSEL_2_gmnbwt.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436716/Picket/Picket_-_CAROUSEL_3_b2e2ac.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436718/Picket/Picket_-_CAROUSEL_4_ez4bpu.png",
    ],
  },
  {
    id: 1,
    name: "Sector Check",
    subtitle: "Finances made easy",
    href: "/work/sector-check",
    featureStatement: "Taking the stress out of payslips for pilots.",
    tags: [
      {
        tech: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
      },
      { tech: "React", url: "https://react.dev/" },
      { tech: "Python", url: "https://www.python.org/" },
      { tech: "Flask", url: "https://flask.palletsprojects.com/en/3.0.x/" },
      {
        tech: "Tabula",
        url: "https://tabula-py.readthedocs.io/en/latest/tabula.html",
      },
    ],
    secondaryImage:
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436838/Sector%20Check/Sector_Check_-_KEY_IMAGE_qbdatg.png",
    heroImage:
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436840/Sector%20Check/Sector_Check_-_THUMBNAIL_HEADER_wz60j5.png",
    idea: [
      "By profession I am actually an airline pilot. I started coding as a hobby which turned into a passion. However, flying pays the bills.",
      "A pilot's salary comes in two parts. A fixed base salary and a variable salary which varies depending on the distance we have flown. There are other variable pays which accrue, for example positioning as a passanger for a flight from another base, overnight allowances, training duty payments etc. Due to the variable nature of the variable pay, payroll sometimes do make mistakes on how much we are to be paid.",
      "Crosschecking the variable pay my self could take hours every month so I created sector check to quickly reference my roster and calculate how much I am to be paid for me. I was taking a crash course in python at the time the idea hit me and so I created the backend using python and the front end was created using react.",
      "Version 1 of the website allows for pilots to manually input their duties while the web app calculates the pay they are owed (Sort of like a glorified spreadsheet). While version 2 (which can be accessed by adding /plus to the url) allows the pilot to simply upload their roster for the backend to analyze all the duties by itself.",
      "This website has definitely made life just a little bit easier for myself and my colleagues. I hope to extend more features into it as I get more time. Such as calculating net income as opposed to the gross income.",
    ],
    projectLink: "https://www.sectorcheck.com",
    githubLink: "https://github.com/arsakhrani/sector-api",
    carouselImages: [
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436836/Sector%20Check/Sector_Check_-_CAROUSEL_-_1_yvqzc3.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436734/Sector%20Check/Sector_Check_-_CAROUSEL_2_vjq4aq.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436736/Sector%20Check/Sector_Check_-_CAROUSEL_3_ufgcv3.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436732/Sector%20Check/Sector_Check_-_CAROUSEL_4_vhdtsq.png",
    ],
  },
  {
    id: 2,
    name: "Things By Hannah",
    subtitle: "Art director portfolio",
    href: "/work/things-by-hannah",
    featureStatement: "A visionary yet practical portfolio for a creative.",
    tags: [
      {
        tech: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
      },
      { tech: "React", url: "https://react.dev/" },
      { tech: "NextJS", url: "https://nextjs.org/" },
    ],
    secondaryImage:
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436864/ThingsbyHannah/ThingsbyHannah_-_KEY_IMAGE_oxkell.png",
    heroImage:
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436866/ThingsbyHannah/ThingsbyHannah_-_THUMBNAIL_HEADER_dtfjp3.png",
    idea: [
      "This webpage is the portfolio for an art director with a decade of experience under her belt. She just also happens to be my wife.",
      "While she created the entire design, I created her website for her using NextJS. This would be my first project using NextJS and would be a learning experience for me. I came to love the performance and the out of the box routing that came with NextJS which simplified a lot of the web dev process for me so that I could focus more on the bespoke features of creating her website.",
      "NextJS quickly became a favorite for me and is now my go to choice for building websites. So much so that the website you are reading this on, callmeAsh.com, was made with NextJS as well!",
    ],
    projectLink: "https://www.thingsbyhannah.com",
    githubLink: "https://github.com/arsakhrani/HannahPortfolio",
    carouselImages: [
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436862/ThingsbyHannah/ThingsbyHannah_-_CAROUSEL_-_1_d2nbir.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436860/ThingsbyHannah/ThingsbyHannah_-_CAROUSEL_2_zu5vju.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436869/ThingsbyHannah/ThingsbyHannah_-_CAROUSEL_3_ryfejt.gif",
    ],
  },
  {
    id: 3,
    name: "Aniko.Art",
    subtitle: "Art auction platform",
    href: "/work/aniko-art",
    featureStatement:
      "Digital art auction site that puts the artists in control.",
    tags: [
      {
        tech: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
      },
      { tech: "React", url: "https://react.dev/" },
      { tech: "StripeJS", url: "https://stripe.com/docs/js" },
      { tech: "Express", url: "https://expressjs.com/" },
      { tech: "MongoDB", url: "https://www.mongodb.com/" },
      { tech: "JWT", url: "https://jwt.io/" },
      { tech: "Styled-Components", url: "https://styled-components.com/" },
    ],
    secondaryImage:
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436707/Aniko.Art/Aniko.art_-_KEY_IMAGE_m8ra11.png",
    heroImage:
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436709/Aniko.Art/Aniko.art_-_THUMBNAIL_HEADER_ux6iiw.png",
    idea: [
      "Aniko.Art is a concept for an art auction platform which connects buyers and sellers interested in specifically eastern european art. Art can either be sold or auctioned.",
      "The backend runs on node express and mongodb while the frontend was created using react.",
    ],

    projectLink: null,
    githubLink: "https://github.com/arsakhrani/aniko-art",
    carouselImages: [
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436705/Aniko.Art/Aniko.art_-_CAROUSEL_-_1_dwjc4x.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436571/Aniko.Art/Aniko.art_-_CAROUSEL_2_z4hruy.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436703/Aniko.Art/Aniko.art_-_CAROUSEL_3_rnmjz1.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436701/Aniko.Art/Aniko.art_-_CAROUSEL_4_dcyeaq.png",
    ],
  },
  {
    id: 4,
    name: "Snowball",
    subtitle: "Social platform to fight climate change",
    href: "/work/snowball",
    featureStatement: "Your climate action platform.",
    tags: [
      { tech: "TypeScript", url: "https://www.typescriptlang.org/" },
      { tech: "React Native", url: "https://reactnative.dev/" },
      { tech: "Expo", url: "https://expo.dev/" },
      { tech: "AWS", url: "https://aws.amazon.com/" },
      { tech: "MySQL", url: "https://www.mysql.com/" },
    ],
    secondaryImage:
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436857/Snowball/Snowball_-_KEY_IMAGE_mxq4e4.png",
    heroImage:
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436854/Snowball/Snowball_-_THUMBNAIL_HEADER_hfgoyq.png",
    idea: [
      "Snowball is a climate action charity founded by a small team of people in London. It is part of Climate Giving a registered charity in England and Wales (reg no 1180221). Everyone who worked on Snowball did so on a voluntary basis.",
      "It was my first practical experience working on a big team and my first go experimenting with react-native and expo.",
    ],
    projectLink: "https://www.joinsnowball.com/about",
    githubLink: null,
    carouselImages: [
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436852/Snowball/Snowball_-_CAROUSEL_-_1_on2u0n.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436848/Snowball/Snowball_-_CAROUSEL_2_i7yo1k.png",
      "https://res.cloudinary.com/di85rflof/image/upload/v1713436849/Snowball/Snowball_-_CAROUSEL_3_jvm7la.png",
    ],
  },
];
