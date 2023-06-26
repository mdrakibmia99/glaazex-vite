import { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutInformation = () => {
    const initValue='80'
    const [selectedValue, setSelectedValue] = useState(initValue);
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
    return (
        <div className="container mx-auto lg:px-0 px-5">
            <h1 className="text-2xl font-bold mb-3">Information Form</h1>


            <div className="form-control w-full mb-3">
                <label className="label p-0">
                    <span className="label-text text-base font-light ">RECIPIENT NAME *</span>
                </label>
                <input  type="text" placeholder="Recipient Name" className="input input-bordered w-full bg-base-200 text-black" />
            </div>

            <div className="mb-3">
                <p className="text-base font-light">RECIPIENT NUMBER *</p>
                <div className="join w-full">
                    <span className="join-item bg-base-200 p-4">+88</span>
                    <input placeholder="01***" className="join-item bg-base-200 w-full" type="tel" />
                </div>
            </div>

            <div className="form-control w-full mb-3">
                <label className="label p-0">
                    <span className="label-text font-light text-base">RECIPIENT ADDRESS *</span>
                </label>
                <input type="text" placeholder="Recipient Address" className="input input-bordered w-full bg-base-200" />
            </div>
            <div className="form-control w-full mb-3">
                <label className="label p-0">
                    <span className="label-text font-light text-base">RECIPIENT ADDRESS *</span>
                </label>
                <div className="flex lg:flex-row flex-col gap-3 mb-3">
                <div className="w-full lg:max-w-xs">

                    <div className="p-[5px] bg-base-200 rounded-lg">
                    <select value={selectedValue} onChange={handleSelectChange} className="select select-bordered w-full lg:max-w-xs bg-base-200 text-base">
                        <option value={initValue} className="text-base bg-base-200 hover:bg-slate-400">Inside Dhaka</option>
                        <option value="100" className="text-base bg-base-200">Dhaka Subarea</option>
                        <option value="120" className="text-base bg-base-200">Outside Dhaka</option>
                    </select>
                    </div>
                </div>
                <div className=" join lg:max-w-[150px] w-full  lg:ml-3 md:ml-3 ml-0">
                    <input value={selectedValue} className="text-center join-item w-full bg-base-200" type="text"  readOnly/>
                    <span className="join-item bg-base-200 p-4 ">TK</span>
                </div>
                </div>
                <div className="mb-3">
                <label className="label p-0 ">
                    <span className="label-text text-base font-light">PAYMENT STATUS *</span>
                </label>
                <div className="p-[5px] bg-base-200 rounded-lg">

                    <select className="select select-bordered w-full bg-base-200">
                        <option>Not Paid</option>
                        <option>Partially Paid</option>
                        <option>Paid</option>
                    </select>
                </div>
                </div>
                <div className="">
                <label className="label p-0">
                    <span className="label-text text-base font-light">COMMENT</span>
                </label>
                <textarea  className="textarea textarea-bordered bg-base-200 text-black  w-full" placeholder="Comment..."></textarea>
                </div>
            </div>

            <Link to={"/order/product/Information"} className="block mt-3  text-center w-full mb-5 bg__bg rounded-md py-3 text-black font-bold hover:cursor-pointer hover:bg-[#939f90] ease-in-out duration-200">PROCEED TO CHECKOUT</Link>



        </div>
    );
};

export default CheckoutInformation;