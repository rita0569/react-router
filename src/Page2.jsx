import { Link } from "react-router-dom";
export const Page2 = () => {
  return (
    <div>
      <h1>Page2です。</h1>
      <br />
      <Link to="detail1">Page2のDetail1</Link>
      <br />
      <Link to="detail2">Page2のDetail2</Link>
      <br />
      <Link to="..">戻る</Link>
    </div>
  );
};
