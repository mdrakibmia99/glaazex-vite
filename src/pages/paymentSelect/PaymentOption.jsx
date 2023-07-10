
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import BkashPayment from './BkashPayment'
import style from './Payment.module.css'
const PaymentOption = () => {
    const [select,setSelect]=useState(-1)
  

  
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
    <section className="container  mx-auto min-h-screen">
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
      {(select===2  || select==-1 )?'':<BkashPayment/>
      }
      {
        select==2 && 
        <div className='w-full flex justify-center my-5 px-5 lg:px-0 md:px-0'>

<input className="bg__bg font-bold cursor-pointer hover:bg-[#96c2a4] w-full mt-5 px-1 py-2 rounded-lg " type="submit" value='Confirm Order' />
        </div>
      }

  </section>
  )
}

export default PaymentOption