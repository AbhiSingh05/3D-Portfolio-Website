const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/AbhiSingh05"> <img src="/assets/github.svg" link = "" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="Check out Abhishek Singh (@Abhishe27261271): https://x.com/Abhishe27261271?t=rTbT1Ii7vyC48rS98VHTQg&s=08">         <img src="/assets/twitter.svg" link = "" alt="twitter" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/abhisingh.exe/profilecard/?igsh=ejluaDZiN2NuODAy"><img src="/assets/instagram.svg"  alt="Instagram" className="w-1/2 h-1/2 " />
          </a>
        </div>
      </div>

      <p className="text-white-500">Copyright @ 2025 by Abhishek. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
