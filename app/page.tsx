import os from "os"; // Node.js APIs -> 서버 컴포넌트에서만 사용 가능
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <>
      <h1> 홈페이지</h1>
      <Counter />
    </>
  );
}
