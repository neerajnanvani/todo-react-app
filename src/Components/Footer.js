import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      icon: "github",
      link: "https://www.github.com/neerajnanvani",
    },
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/in/neeraj-nanvani-665959203",
    },
    {
      icon: "instagram",
      link: "https://www.instagram.com/neeraj_nanvani_",
    },
  ];
  return (
    <>
      <div className="fixed-bottom bg-dark text-white py-2 text-center">
        React Todo
        {socialLinks.map((socialLink) => {
          return (
            <a href={socialLink.link} target="_blank">
              <i className={`bi bi-${socialLink.icon} mx-3`}></i>
            </a>
          );
        })}
      </div>
    </>
  );
};
export default Footer;
