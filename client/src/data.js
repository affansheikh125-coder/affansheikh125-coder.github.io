// All personal info lives here — edit this file to update the site.
export const PROFILE = {
  name: 'Affan Sheikh',
  fullName: 'Muhammad Affan Sheikh',
  role: 'Full-Stack & Mobile Developer · Performance Marketer',
  location: 'Lahore, Pakistan',
  email: 'affansheikh125@gmail.com',
  whatsappDisplay: '0312 4243627',
  whatsappIntl: '923124243627',
  linkedin: 'https://www.linkedin.com/in/affan-sheikh-60600b319/',
  github: 'https://github.com/affansheikh125-coder',
};

export const whatsappLink = (text = "Hi Affan, I found your portfolio and I'd like to discuss a project.") =>
  `https://wa.me/${PROFILE.whatsappIntl}?text=${encodeURIComponent(text)}`;
