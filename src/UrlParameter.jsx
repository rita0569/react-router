import { Link, useSearchParams } from "react-router-dom";
import { Page404 } from "./NotFound";

export const UrlParameter = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const country = searchParams.get("country");

  const isExistID = id != null;
  const isExistCountry = country != null;
  const isExistParams = isExistID && isExistCountry;
  console.log(isExistID);

  return isExistParams ? (
    <div>
      <h1>UrlParameterです</h1>
      <p>{`id:${id}`}</p>
      <p>{`country:${country}`}</p>
      <br />
      <Link to="..">戻る</Link>
    </div>
  ) : (
    <div>
      <h1>UrlParameterです</h1>
      <Page404 />
      {isExistID || <p>queryにidがありません！</p>}
      {isExistCountry || <p>queryにcountryがありません！</p>}
    </div>
  );
};
