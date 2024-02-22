import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Explore() {
  const listOfTeachers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Robert Brown" },
  ];
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3000/listing/getlisting");
      const { data } = await res.json();
      setData(data);
      console.log("data", data);
    }
    getData();
  }, []);
  async function getShortedData(name) {
    const res = await fetch(
      `http://localhost:3000/listing/getlisting?teacher=${name}`
    );
    const { data } = await res.json();
    setData(data);
    console.log("data", data);
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
      }}
      className="my-5"
    >
      <div className="">
        <div class="space-y-2">
          <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
              <span class="text-sm font-medium"> Availability Teachers</span>

              <span class="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div class="border-t border-gray-200 bg-white">
              <ul class="space-y-1 border-t border-gray-200 p-4">
                {listOfTeachers.map((teacher) => (
                  <li
                    onClick={() => getShortedData(teacher.name)}
                    key={teacher.id}
                  >
                    <label
                      for="FilterOutOfStock"
                      class="inline-flex items-center gap-2"
                    >
                      <span class="text-sm hover:underline font-medium text-gray-700">
                        {teacher.name}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        className="p-4"
      >
        {data.map((item, index) => (
          <div key={item.id} className="bg-white flex flex-wrap m-2 rounded-lg">
            <div className="flex">
              <img
                src={item.img}
                alt={item.title}
                className="w-screen  rounded-md"
              />
            </div>
            <div className="p-4 flex gap-6">
              <Link className="flex gap-2 flex-col" href="#">
                <h5 className="text-2xl font-bold">{item.title}</h5>
                <p>
                  <span>Description : </span>
                  {item.description}
                </p>
                <p className="flex justify-between">
                  <div className="font-bold">Teacher</div>
                  <div>{item.teacher}</div>
                </p>
                <p className="flex justify-between">
                  <div className="font-bold">Duration</div>
                  <div>{item.duration}</div>
                </p>
                <p className="flex justify-between">
                  <div className="font-bold">Difficulty</div>
                  <div>{item.difficulty}</div>
                </p>
                <p className="flex justify-between">
                  <div className="font-bold">Price</div>
                  <div> {item.cost}</div>
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
