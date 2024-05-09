import React, { useState } from "react";

import location from "@/data/cities.json";
const recommend: Array<string> = ["Java", "NodeJS", "ReactJS", "PHP"];

import "@/styles/tooltip.css";

const Search = () => {
  const [tooltip, setTooltip] = useState<any[]>([]);
  const showHint = (text: string) => {
    fetch(`http://localhost:3000/api/job/search`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setTooltip(data.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-banner h-[320px] w-full relative overflow-hidden">
      <div
        className="mx-auto flex flex-col justify-center h-full max-w-[1220px] gap-3"
        style={{ color: "white" }}
      >
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-[#CAFF70]">
          Find jobs quickly 24 hours, jobs newest nationwide.
        </h1>
        <p className="text-[#fff]">
          More than 1200+ freelancers are waiting for you
        </p>
        <div className="flex flex-row gap-3 w-full">
          <select
            className="select select-bordered w-full max-w-[15rem] h-14 text-[#000]"
            defaultValue={""}
          >
            <option value="" hidden>
              Chọn thành phố
            </option>
            {location?.map((e) => (
              <option key={e.code} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
          <div className="relative inline-block myTooltip bg-[#fff] w-full  h-14">
            <input
              id="input-search"
              type="text"
              placeholder="Nhập theo từ khóa kỹ năng"
              className="input input-bordered w-full h-14 text-[#000]"
              onChange={(e) => showHint(e.target.value)}
            />
            <div className="flex flex-col p-4 bg-white w-full h-24 rounded-md z-20 absolute right-0 invisible myTooltip-item bg-[#fff] text-[#000] overflow-scroll">
              {/* <a href="" className="font-semibold pb-4">
                Help
              </a> */}
              <ul className="list-disc space-y-2">
                {tooltip?.map((e) => (
                  <li className="flex items-start" key={e.id}>
                    <a
                      href={`/job/search/${e.id}`}
                      className="font-medium text-sm text-gray-500 hover:text-black"
                    >
                      {" "}
                      {e.title}{" "}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className="btn btn-primary w-60 h-14">Tìm kiếm</button>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-[#fff]">Mọi người đang tìm kiếm:</p>
          {recommend?.map((e, i) => (
            <a className="badge badge-neutral p-4 text-base" key={i}>
              {e}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
