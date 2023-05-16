import { Link, useLocation, useNavigate } from "react-router-dom";

export const Page1Detail1 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const onClickBackButton = () => {
    navigate("..");
  };
  return (
    <div>
      <h1>Page1のDetail1です。</h1>
      <br />
      <Link to="..">戻る</Link>
      <br />
      <br />
      <button onClick={onClickBackButton}>戻る</button>
    </div>
  );
};
