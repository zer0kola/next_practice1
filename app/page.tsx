import os from "os"; // Node.js APIs

export default function Home() {
  console.log(os.hostname());

  return <h1>홈페이지</h1>;
}
