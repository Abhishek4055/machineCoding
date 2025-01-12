import { useEffect, useRef, useState } from "react";
import ItemDetailsCards from "./ItemDetailsCards";
import { height } from "@mui/system";

const ScrollingIndex = ({ respData, page }) => {
  //   const loadingRef = useRef(null);
  const [pagedata, setPageData] = useState([]);

  useEffect(() => {
    if (respData && respData?.posts) {
      setPageData((prev) => {
        return [...prev, ...respData.posts];
      });
    }
  }, [page]);

  return (
    <div className="">
      {
        <ol>
          {respData &&
            pagedata.map((item) => (
              <ItemDetailsCards key={item.id} item={item} />
            ))}
        </ol>
      }
      <p ref={loadingRef}>Loading......</p>
    </div>
  );
};

export default ScrollingIndex;
