
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import style from './Payment.module.css'
const PaymentOption = () => {
    const [select,setSelect]=useState(-1)
    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => console.log(data)
    const paymentOption=[ 
        {img:'/images/Nagad-Vertical-Logo.wine.svg',
        name:"Nagad"
      },
      {
        img:'/images/bkash.svg',name:'Bkash'
      },
      {
        img:'/images/cod.png',name:'COD'
      },
      {
        img:'/images/rokect.png',name:'ROCKET'
      },
      ]
  return (
    <section className="container  mx-auto h-full">
    <h1 className="text-3xl text-center">SELECT PAYMENT METHOD</h1>
     <div className="flex flex-row flex-wrap gap-3  justify-center px-2">
      {
          paymentOption.map((PayOpt,index)=>(

      <div key={index}
      onClick={(()=>setSelect(index))}
      className={`relative  overflow-hidden shadow-[#b0beb5]  shadow-md  border-2 border-black  w-[200px] h-[227px] rounded-xl flex flex-col items-center justify-center gap-2 hover:scale-[0.97] duration-500 ease-in-out`}> 
      {
        select==index?    <span className={`absolute top-[-25px] left-[-5px] ${style.payment_select}`} > L </span>:""
      }
   
      <img className="cover" src={PayOpt.img}  alt="" />
       <p className="text-xl font-bold">{PayOpt.name}</p>
       </div>  
            ))
      }
      </div>    
      <div>
      {/* <form onSubmit={handleSubmit(handlePayment)}>
      <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Amount</span>
            </label>
            <input
            value={100}
              type="text"
              readOnly
              className={`input input-bordered w-full`} />
          </div>
      <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Sender Number</span>
            </label>
            <input
              {...register("number", { required: true })}
              type="tel"
              placeholder="Sender Number"
              className={`input input-bordered w-full`} />
            {!errors.number && <label className="label">
              <span className="label-text-alt  text-red-600">Sender Number is required</span>
            </label>}
          </div>
      <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Transaction ID</span>
            </label>
            <input
              {...register("transaction", { required: true})}
              type="text"
              placeholder="Transaction ID"
              className={`input input-bordered w-full`} />
            {errors.transaction && <label className="label">
              <span className="label-text-alt  text-red-600">Transaction is required</span>
            </label>}
          </div>
          <input
              className="bg__bg font-bold cursor-pointer hover:bg-[#96c2a4] w-full mt-5 px-1 py-2 rounded-lg" type="submit" value='Add Now' />
        </form> */}


<form onSubmit={handleSubmit(onSubmit)}>
<div className="form-control w-full">
            <label className="label">
              <span className="label-text">Amount</span>
            </label>
            <input
            value={100}
              type="text"
              readOnly
              className={`input input-bordered bg-white w-full`} />
          </div>      

      <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Sender Number</span>
            </label>
            <input
              {...register("number", {   required: true,
                pattern:/(^(\+8801|01|))[1|3-9]{1}(\d){8}$/,
               
              })}
              type="tel"
              placeholder="Sender Number 01...."
              className={`input input-bordered bg-white w-full`} />
            {errors.number && <label className="label">
              <span className="label-text-alt  text-red-600">Enter valid number Like 01..</span>
            </label>}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Transaction ID</span>
            </label>
            <input
              {...register("transaction", { required: true})}
              type="text"
              placeholder="Transaction ID"
              className={`input input-bordered bg-white w-full`} />
            {errors.transaction && <label className="label">
              <span className="label-text-alt  text-red-600">Transaction is required</span>
            </label>}
          </div>
          <input
              className="bg__bg font-bold cursor-pointer hover:bg-[#96c2a4] w-full mt-5 px-1 py-2 rounded-lg" type="submit" value='Confirm Order' />
    </form>

     <div className='h-full mt-[50px] mb-2 mx-2 lg:mx-0'>
     <div class="p-3" className='text-sm'><p>Follow below steps 👇</p> <h3 class="font-bold my-3">Step 1: </h3> <ol class="divide-y divide-gray-300"><li class="divide-y divide-gray-300"> প্রথমে উপরে দেওয়া নাম্বার কপি করুণ।</li> <li class="divide-y divide-gray-300"> (bKash,Nagad,Rocket) App অথাবা Ussd কোডের মধ্যেমে সেন্ড মানি অপশন সিলেক্ট করুণ।</li> <li class="divide-y divide-gray-300"> TINAMS PAYMENT নাম্বার (_) প্রবেশ করুণ।</li> <li class="divide-y divide-gray-300"> এম্যাউন্ট অর্থাৎ কত টাকা যোগ করবেন তার পরিমাণ প্রবেশ করুণ।</li> <li class="divide-y divide-gray-300"> Enter Reference Number "user id". ( রেফারেন্সে আপনার ইউজার আইডি দিন )</li> <li class="divide-y divide-gray-300"> আপনার বিকাশ পিন নাম্বার প্রবেশ করুণ।.</li></ol> <h3 class="font-bold my-3">Almost Done. Now follow Step 2:</h3> <ol class="divide-y divide-gray-300"><p class="py-2">তারপর নিচে যে দুটি বক্স দেখতে পারছেন</p> <p>প্রথম Box এ কত টাকা পাঠিয়েছেন সেটা লিখে দেবেন।</p> <p class="py-2">দ্বিতীয় বক্সে আপনি যে নাম্বার থেকে টাকা পাঠিয়েছেন সেই নাম্বার লিখে দেবেন।</p> <p>তারপর Add অপশনে ক্লিক করে দাও দুই থেকে পাঁচ মিনিটের মধ্যে টাকা যোগ হয়ে যাবে অবশ্যই টাকা Send Money-করার পড় এই কাজটি করবেন</p></ol></div>
     </div>
       
      </div>

  </section>
  )
}

export default PaymentOption