import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const CheckoutInformation = () => {
    const initValue='80'
    const [selectedValue, setSelectedValue] = useState(initValue);
    const [promotionalCode, setPromotionalCode] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleFormSubmit=(e)=>{
    // e.preventDefault()
    console.log(e)
    // navigate('/payment/option')

  }
  
    return (
        <section className="bg-white w-full">
        <div className="container mx-auto lg:px-0 px-5">
            <h1 className="text-2xl font-bold mb-3">Information Form</h1>

            <div className="form-control w-full mb-3">
                <label className="label p-0">
                    <span className="label-text text-base font-light ">RECIPIENT NAME *</span>
                </label>
                <input 
                 {...register("recipientName", {
                    required: "Name minimum 2 character", minLength: 2
                  })}
                type="text" placeholder="Recipient Name" className="input bg-[#eeeeee] outline-none border-none input-bordered w-full  text-black" />
                {errors.recipientName && <label className="label">
              <span className="label-text-alt  text-red-600">Name minimum 2 character</span>
            </label>}
            </div>

            <div className="mb-3">
                <p className="text-base font-light">RECIPIENT NUMBER *</p>
                <div className="join w-full ">
                    <span className="join-item  p-4 bg-[#eeeeee] outline-none border-none">+88</span>
                    <input 
                     {...register("number", {
                        required:true,
                        pattern:/(^(\+8801|01|))[1|3-9]{1}(\d){8}$/,
                      })}
                    placeholder="01***" className="join-item bg-[#eeeeee] outline-none border-none  w-full" type="tel" />
                </div>
                     {errors.number && <label className="label">
              <span className="label-text-alt  text-red-600">Enter a valid number 01***</span>
            </label>}
            </div>

            <div className="form-control w-full mb-3">
                <label className="label p-0">
                    <span className="label-text font-light text-base">RECIPIENT ADDRESS *</span>
                </label>
                <input
                 {...register("recipientAddress", {
                    required:true
                  })}
                required type="text" placeholder="Recipient Address" className="input bg-[#eeeeee] outline-none border-none input-bordered w-full " />
                {errors.recipientAddress && <label className="label">
              <span className="label-text-alt  text-red-600">Enter a valid number 01***</span>
            </label>}
            </div>
            <div className="form-control w-full mb-3">
                <label className="label p-0">
                    <span className="label-text font-light text-base">RECIPIENT ADDRESS *</span>
                </label>
                <div className="flex lg:flex-row flex-col gap-3 mb-3">
                <div className="w-full lg:max-w-xs">

                    <div className="p-[5px] rounded-lg">
                    <select value={selectedValue} onChange={handleSelectChange} className="select select-bordered w-full lg:max-w-xs bg-[#eeeeee] outline-none border-none text-base">
                        <option value={initValue} className="text-base bg-base-200 hover:bg-slate-400">Inside Dhaka</option>
                        <option value="100" className="text-base bg-base-200">Dhaka Subarea</option>
                        <option value="120" className="text-base bg-base-200">Outside Dhaka</option>
                    </select>
                    </div>
                </div>
                <div className=" join lg:max-w-[150px] w-full  lg:ml-3 md:ml-3 ml-0">
                    <input required value={selectedValue} className="text-center join-item w-full bg-[#eeeeee] outline-none border-none" type="text"  readOnly/>
                    <span className="join-item p-4 bg-[#eeeeee] outline-none border-none ">TK</span>
                </div>
                </div>
                <div className="mb-3">
                <label className="label p-0 ">
                    <div>

                    <span className="label-text text-base font-light">Have you any Promotional Code? </span>
                    <input 
                    className="bg-[#eeeeee] outline-none border-none"
                     type="checkbox" 
                     onClick={()=>setPromotionalCode(!promotionalCode)}
                     name="" id="" />
                     </div>
                </label>
                {
                    promotionalCode &&
                    <div className="flex lg:flex-row flex-col gap-3 mb-3">
                    <div className="w-full lg:max-w-xs">
    
                        <div className="p-[5px] bg-[#eeeeee] outline-none border-none rounded-lg">
                        <select className="select select-bordered w-full lg:max-w-xs bg-[#eeeeee] outline-none border-none text-base">
                            <option>Discount Code</option>
                            <option>Membership Code</option>
                            <option>Reseller Code</option>
                            
    
                        </select>
                        </div>
                    </div>
                    <div className="  w-full lg:max-w-xs    lg:ml-3 md:ml-3 ml-0">

                        <input 
                         {...register("code", {
                            required:true
                          })}
                        className="input input-bordered h-[57px] w-full bg-[#eeeeee] outline-none border-none" type="text"  placeholder="Enter code"/>
                        {errors.code && <label className="label">
              <span className="label-text-alt  text-red-600">Enter a valid number 01***</span>
            </label>}
        
                    </div>
                    </div>
                }
                
                </div>
                <div className="">
                <label className="label p-0">
                    <span className="label-text text-base font-light">COMMENT</span>
                </label>
                <textarea  className="textarea textarea-bordered  text-black  w-full bg-[#eeeeee] outline-none border-none" placeholder="Comment..."></textarea>
                </div>
            </div>
             
             <input
             onClick={handleSubmit(handleFormSubmit)} 
             className="block mt-3  text-center w-full mb-5 bg__bg rounded-md py-3 text-black font-bold hover:cursor-pointer hover:bg-[#939f90] ease-in-out duration-200" type="submit" value={'PROCEED TO CHECKOUT'} />
            {/* <Link to={"/payment/option"} className="block mt-3  text-center w-full mb-5 bg__bg rounded-md py-3 text-black font-bold hover:cursor-pointer hover:bg-[#939f90] ease-in-out duration-200">PROCEED TO CHECKOUT</Link> */}


        </div>

        </section>
    );
};

export default CheckoutInformation;