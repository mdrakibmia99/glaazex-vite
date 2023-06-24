/* eslint-disable react/prop-types */


const AddCardPage = ({ cartChecked, setCardChecked }) => {
  console.log(cartChecked, 'chartche')
  return (
    <>
      <div className="drawer drawer-end z-50">
        <input id="card-open-drawer"
          checked={`${cartChecked ? '' : 'checked'}`}
          type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

        </div>
        <div className="drawer-side">
          <label htmlFor="card-open-drawer" className="drawer-overlay"></label>
          <div className="bg-base-200 w-80 h-screen z-50 fixed">

            <div className="mt-2 ">
              <div className="flex justify-between px-5 items-center">
                <div>
                  <p className="text-lg font-bold">Cart</p>
                  <span className="text-sm font-extralight">Wish to Purchase</span>
                </div>
                <div 
                onClick={() => setCardChecked(!cartChecked)}
                className="outline rounded-full  shadow-black w-[20px] h-[20px] hover:cursor-pointer hover:scale-[1.05]">
                  <svg stroke="currentColor" fill="currentColor" className="rounded-full" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                </div>

              </div>
              <div className="divider mt-0"></div>
            </div>

           

            <div className="fixed bottom-0 w-full px-5">
              <button className="w-full mb-5 bg__bg rounded-md py-2 text-black font-bold hover:cursor-pointer hover:bg-[#939f90] ease-in-out duration-200">ORDER NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCardPage