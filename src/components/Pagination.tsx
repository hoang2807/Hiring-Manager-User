import React, { useEffect, useState } from "react";

interface Props {
  page: number;
  length?: number;
}

const Pagination = (props: Props) => {
  const [page, setPage] = useState<number>(props.page || 1);
  const [mode, setMode] = useState<boolean>(false);
  const [pageThree, setPageThree] = useState<boolean>(false);
  useEffect(() => {
    if (page == 1) setMode(true);

    fetch(`http://localhost:3000/api/job/pagination/?page=${page + 1}&take=6`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length > 0) setPageThree(true);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {mode ? (
        <div className="join">
          <a
            href={`/job/pagination/${page}`}
            className="join-item btn btn-active"
          >
            {page}
          </a>
          <a href={`/job/pagination/${page + 1}`} className="join-item btn">
            {page + 1}
          </a>
        </div>
      ) : (
        <div className="join">
          <a href={`/job/pagination/${page - 1}`} className="join-item btn">
            {page - 1}
          </a>
          <a
            href={`/job/pagination/${page}`}
            className="join-item btn btn-active"
          >
            {page}
          </a>
          {pageThree ? (
            <a href={`/job/pagination/${page + 1}`} className="join-item btn">
              {page + 1}
            </a>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Pagination;
