import { useState } from "react";
import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

  // const res = await fetch("http://localhost:3000/listing/getlisting");
  // const data = await res.json();
  // console.log("data", data.data);
  return (
    <div className="flex h-fit flex-col gap-10">
      <div className="flex gap-10 justify-around">
        <div className="flex flex-col gap-10">
          <div className="border-2 border-white text-2xl p-2 flex items-center justify-between rounded-xl">
            <input
              className="outline-none w-full bg-transparent p-1"
              type="text"
            ></input>
            <IoSearch className="text-black mx-2" />
          </div>
          <div>
            <h2 className="text-5xl mb-4">Do Yoga. Be Healthy.</h2>
            <p className="text-2xl">100+ online yoga classes.</p>
            <p className="text-2xl">Book a trial class at just Rs.50</p>
          </div>
        </div>
        <div>
          <img
            className="rounded-xl h-[450px]"
            src="/547_SkVNQSBHRVIgNzI5LTI3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h3 className="text-6xl font-bold">Book your Class Now</h3>
        <div>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {/* {data.data.map((item, index) => ( */}
            {data.map((item, index) => (
              <div
                key={item.id}
                className="bg-white flex flex-wrap h-fit m-2 rounded-lg"
              >
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
          </Carousel>
        </div>
      </div>
    </div>
  );
}
