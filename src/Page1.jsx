import { Link, useNavigate } from "react-router-dom";
export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const navigate = useNavigate();
  const onClickDetail1 = () => {
    console.log("onClickDetail1");
    navigate("detail1");
  };
  return (
    <div>
      <h1>Page1です。</h1>
      <br />
      <Link to="detail1" state={arr}>
        Page1のDetail1
      </Link>
      <br />
      <Link to="detail2">Page1のDetail2</Link>
      <br />
      <button onClick={onClickDetail1}>go to Detail1</button>
      <br />
      <Link to="..">戻る</Link>
    </div>
  );
};
