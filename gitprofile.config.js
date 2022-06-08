// gitprofile.config.js

const config = {
  github: {
    username: 'mirouhml', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['portfolio','Library-Android-Application','awesome-books','Library'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'ammar-hamlaoui',
    twitter: '',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://mirouhml.github.io',
    phone: '+213662512800',
    email: 'amarhamlaoui@gmail.com',
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'CSS',
    'Bootstrap',
    'Ruby on Rails',
  ],
  experiences: [
    {
      company: 'NAMËNA',
      position: 'Web Developer',
      from: 'September 2020',
      to: 'Present',
    },
    {
      company: 'Digital Anime',
      position: 'Frontend Developer',
      from: 'September 2018',
      to: 'September 2020',
    },
  ],
  education: [
    {
      institution: 'Microverse',
      degree: 'Computer Programming',
      from: '2022',
      to: '2022',
    },
    {
      institution: 'University of Abdelhamid Mehri - Constantine',
      degree: 'Master of Science - Software Engineering',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'University of Larbi Ben Mhidi - Oum El Bouaghi',
      degree: 'Bachelor of Science - Computer Systems',
      from: '2015',
      to: '2018',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {},
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
