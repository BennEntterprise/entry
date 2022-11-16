import React from "react";

interface IStack {
  title: string;
  slices: Array<string>;
}

const data: IStack[] = [
  {
    title: "KyleBennett.io (this site!)",
    slices: [
      "HTML/CSS/Typescript React",
      "Codesandbox and VSCode",
      "Vercel",
      "Snyk",
    ],
  },
  {
    title: "SMB WordPress",
    slices: ["WordPress", "Digital Ocean", "WordFence"],
  },
];

const Stack = ({ title, slices }: IStack) => {
  return (
    <div className="stack">
      <h4 className="stack-title">{title}</h4>
      <ul className="stack-list">
        {slices.map((s) => (
          <li key="s">{s}</li>
        ))}
      </ul>
    </div>
  );
};

export const Stacks = () => {
  return (
    <>
      <h3 id="stacks-header">Tech Stacks</h3>
      <div id="stacks">
        {data.map((s) => (
          <Stack key={s.title} title={s.title} slices={s.slices} />
        ))}
      </div>
    </>
  );
};
