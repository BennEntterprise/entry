import React from "react";

interface IStack {
  title: string;
  slices: Array<string>;
}

const data: Array<IStack> = [
  {
    title: "A Small Business on Wordpress",
    slices: ["LAMP", "Digital Ocean"],
  },
  {
    title: "EntryPoint (This Site)",
    slices: [
      "HTML/CSS/React/Typescript",
      "Codesandbox.io",
      "Netlify",
      "(Soon to include Vercel)",
    ],
  },
  {
    title: "FSPortfolio",
    slices: [
      "NodeTS/Express",
      "HTML/CSS/React/Typescript",
      "LetsEncrypt",
      "PM2",
      "AWS EC2 Instance (linux)",
    ],
  },
  {
    title: "HomeServer/Intranet",
    slices: ["Python Scripts", "Grafana", "Nginx", "RapsberryPI"],
  },
];

const Stack = ({ title, slices }: IStack) => {
  return (
    <div className="stack">
      <h3 className="stact-title">{title}</h3>
      <ul>
        {slices.map((s) => (
          <li>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export const TechStacks = () => {
  return (
    <div className="stacks">
      {data.map((s) => {
        return <Stack key={s.title} title={s.title} slices={s.slices} />;
      })}
    </div>
  );
};
