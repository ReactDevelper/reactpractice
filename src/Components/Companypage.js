import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Companypage = () => {
  const hammad = useNavigate();
  const hello = () => {
    hammad("/blog");
  };
  return (
    <>
    <Navbar/>
      <div className="text-center">
      <h1 className="text-4xl font-bold p-3">Company Page</h1>
        <h1 className="p-9">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
          repellat non iste consequatur obcaecati ipsa ex. Impedit iusto
          distinctio cum unde assumenda, optio aperiam odit ullam sed, nemo
          voluptatem necessitatibus eaque quod provident minima, quas quibusdam
          corrupti? Sint omnis modi totam animi aut similique sit, amet
          accusamus esse quam magnam maxime iusto quos, aspernatur rem quod
          perspiciatis iure tenetur dolorem asperiores ipsum! Quidem a sequi
          numquam perferendis repellat, accusantium fugit hic eveniet deleniti
          ullam, esse optio vitae eos, nulla sapiente dicta illo quod tenetur
          est. Voluptates, nostrum quis quod, ut ratione, doloribus et placeat
          distinctio ea enim tenetur! Sint, ea.
        </h1>
      </div>
      <button
        onClick={hello}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center flex justify-center items-center "
      >
        <h1>Go to blog page</h1>
      </button>
      <Footer/>
    </>
  );
};

export default Companypage;
