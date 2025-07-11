// import React from 'react';
// import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
// import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
// import { ReactComponent as IconGithub } from './assets/icons/github.svg';
// import "./App.css";

// class App extends React.Component {
//   render = () => {
//     return (
//       <div className="card">
//         <div className="header">
//           <div className="logo">
//             <a href=".">LOGO</a>
//           </div>
//           <div className="social">
//             <a href="https://www.facebook.com/SunShineIEC" title="Facebook" target="_blank" rel="noopener noreferrer">
//               <IconFacebook className="icon" />
//             </a>
//             <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
//               <IconTwitter className="icon" />
//             </a>
//             <a href="https://github.com/sunshine867" title="GitHub" target="_blank" rel="noopener noreferrer">
//               <IconGithub className="icon" />
//             </a>
//           </div>
//         </div>
//         <div className="content">
//           <div className="title-holder">
//             <h1>Get ready for the change.</h1>
//             <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
//           </div>
//           <a href="mailto:sunshinejapanedu@gmail.com">
//             <div className="cta">Send us an email</div>
//           </a>
//         </div>
//         <div className="footer">
//           <span>made by <a className="underlined" href="https://spghimire.com.np" target="_blank" rel="noopener noreferrer">spghimire</a> </span>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;




import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import Logo from './assets/images/logo.png';          // ← adjust if your logo lives elsewhere
import './App.css';

class App extends React.Component {
  // helper to open Gmail compose
  handleEmailClick = () => {
    const email   = 'sunshinejapanedu@gmail.com';
    const subject = encodeURIComponent('Inquiry about your services');
    const body    = encodeURIComponent(
      'Hello,\n\n inquire about our services. Please let me know.\n \n' +
      'Name: \n' +
      'Email: \n' +
      'Message: \n\n' +
      'Thank you!'
    );

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailURL, '_blank');          // opens Gmail compose in a new tab
  };
componentDidMount() {
  document.title = 'Sunshine IEC | Coming Soon';
}

  render() {
    return (
      <div className="card">
        {/* ───────────── Header ───────────── */}
        <div className="header">
          {/* Logo */}
          <div className="logo">
            <a href="." title="Home">
              <img src={Logo} alt="Sunshine IEC logo" className="logo-img" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="social">
            <a
              href="https://www.facebook.com/SunShineIEC"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="icon" />
            </a>
            <a
              href="https://twitter.com"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter className="icon" />
            </a>
            <a
              href="https://github.com/sunshine867"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub className="icon" />
            </a>
          </div>
        </div>

        {/* ───────────── Main Content ───────────── */}
        <div className="content">
          <div className="title-holder">
            <h1> Get ready for the change With</h1>
            <h1> Sunshine International Education Center.</h1>
            <p>
              Website coming soon. Please check back to know more. Shoot us an email if you're
              curious.
            </p>
          </div>

          {/* Call‑to‑action button */}
          <div className="cta" onClick={this.handleEmailClick} style={{ cursor: 'pointer' }}>
            Send us an email
          </div>
        </div>

        {/* ───────────── Footer ───────────── */}
        <div className="footer">
          <span>
            made by{' '}
            <a
              className="underlined"
              href="https://spghimire.com.np"
              target="_blank"
              rel="noopener noreferrer"
            >
              spghimire
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
