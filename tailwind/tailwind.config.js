module.exports = {
  content: ['./index.html', './legal.html'],
  theme: {
    extend: {
      colors: {
        primary: { 50:'#f4f6f9',100:'#e9edf2',200:'#c8d4e1',300:'#9db4cb',400:'#6c8fb1',500:'#487095',600:'#375778',700:'#2d4661',800:'#1a2a44',900:'#142034' },
        accent: { 50:'#fbf9f4',100:'#f5efe0',200:'#ebdebf',300:'#ddc897',400:'#cdad6d',500:'#c2a878',600:'#af915d',700:'#927649',800:'#765e3c',900:'#614d33' },
        neutral: { 50:'#fafafa',100:'#f5f5f5',200:'#e5e5e5',300:'#d4d4d4',400:'#a3a3a3',500:'#737373',600:'#525252',700:'#333333',800:'#262626',900:'#171717' }
      },
      fontFamily: { serif: ['"Playfair Display"', 'serif'], sans: ['Inter', 'sans-serif'] }
    }
  }
};
