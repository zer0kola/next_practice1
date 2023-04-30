import Link from "next/link";
const products = ["shirts", "pants", "skirt", "shoes"];

export default function ProductsPage() {
  return (
    <div>
      <h1>제품 소개 페이지</h1>
      <ul>
        {/* products 배열의 각 요소를 순회하면서 Link 컴포넌트를 생성 */}
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
