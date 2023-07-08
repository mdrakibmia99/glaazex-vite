

function SelectPayment() {
  return (<section className="container bg-[white] mx-auto h-[450px]">
    <h1 className="text-3xl text-center">SELECT PAYMENT METHOD</h1>
     <div className="flex flex-row  gap-3 flex-initial justify-center">
      <div className=" shadow-[#b0beb5]  shadow-md  border-2 border-black  w-[200px] h-[227px] rounded-xl flex flex-col items-center justify-center gap-2 hover:scale-[0.97]"> 
      <img className="cover" src={'/public/images/Nagad-Vertical-Logo.wine.svg'}  alt="" />
       <p className="text-xl font-bold">Nagad</p>
       </div>
      <div className=" shadow-[#b0beb5]  shadow-md  border-2 border-black  w-[200px] h-[227px] rounded-xl flex flex-col items-center justify-center gap-2 hover:scale-[0.97]"> 
      <img className="cover" src={'/public/images/bkash.svg'}  alt="" />
       <p className="text-xl font-bold">Bkash</p>
      

        
      </div>    
      </div>    

  </section>
  )
}

export default SelectPayment