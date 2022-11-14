import React from "react";

interface IStack {
  title: string;
  slices: Array<string>;
}

const data: Array<IStack> = [
  {
    title: "EntryPoint (This Site)",
    slices: [
      "HTML/CSS/React/Typescript inside Codesandbox.io",
      "Netlify (Until 2023)",
      "Vercel + Github Actions (2023+)",
    ],
  },
  {
    title: "A Small Business on Wordpress",
    slices: ["WordPress", "Digital Ocean"],
  },
  // {
  //   title: "Other Assorted Works...",
  //   slices: [
  //     "A variety of HTML/CSS/React/Typescript developed inside VSCode",
  //     "served from NodeTS/Express",
  //     "with connections to MongoAtlas",
  //     "running on an AWS EC2 Instance (linux)",
  //     "maintaining TLS Security with LetsEncrypt",
  //     "and node process management with PM2",
  //   ],
  // },
  // {
  //   title: "HomeServer/Intranet",
  //   slices: ["Python Scripts", "Grafana", "Nginx", "RapsberryPI"],
  // },
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
