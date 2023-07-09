import { useState } from "react"
import style from './Payment.module.css'

const paymentOption=[ 
  {img:'/public/images/Nagad-Vertical-Logo.wine.svg',
  name:"Nagad"
},
{
  img:'/public/images/bkash.svg',name:'Bkash'
}
]

function SelectPayment() {
  const [select,setSelect]=useState(-1)
  return (<section className="container rk mx-auto h-[450px]">
    <h1 className="text-3xl text-center">SELECT PAYMENT METHOD</h1>
     <div className="flex flex-row  gap-3 flex-initial justify-center">
      {
          paymentOption.map((PayOpt,index)=>(

      <div key={index}
      onClick={(()=>setSelect(index))}
      className={`relative overflow-hidden shadow-[#b0beb5]  shadow-md  border-2 border-black  w-[200px] h-[227px] rounded-xl flex flex-col items-center justify-center gap-2 hover:scale-[0.97] duration-500 ease-in-out`}> 
      {
        select==index?    <span class={`absolute top-[-25px] left-[-5px] ${style.payment_select}`} > L </span>:""
      }
   
      <img className="cover" src={PayOpt.img}  alt="" />
       <p className="text-xl font-bold">{PayOpt.name}</p>
       </div>  
            ))
      }
      </div>    

  </section>
  )
}

export default SelectPayment