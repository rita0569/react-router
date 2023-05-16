import { Link, createSearchParams } from "react-router-dom";
export const Page3 = () => {
  const params = createSearchParams({
    id: "001",
    country: "USA"
  }).toString();
  return (
    <div>
      <h1>Page3です</h1>
      <Link to={`page3?${params}`}>URL Parameter</Link>
      <br />
      <Link to="..">戻る</Link>
    </div>
  );
};
