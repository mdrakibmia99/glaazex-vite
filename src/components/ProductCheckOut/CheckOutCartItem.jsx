
function CheckOutCartItem() {
    return (<>


        <div className="flex flex-row box-border items-center gap-[5px] lg:gap-2 lg:px-5  w-full mb-5 justify-between p-5">

            <div className=" sm:w-1/12 ">

                <img className="rounded min-w-[50px] h-[50px]" src="https://backend.pndservicebd.com//storage/upload/products/thumbnail/1768153516227703.jpeg" alt="" />
            </div>

            <div className="w-4/12">
                <p className="whitespace-nowrap truncate text-base md:text-lg">New Beauty glazed lipsitcs asdf </p>
                <p className="text-sm lg:text-base whitespace-nowrap">12 <span>Items x </span>10 </p>
            </div>

            <div className="w-3/12">
                <span className=" rounded-full whitespace-nowrap text-xs lg:text-base">color 4x1</span>
            </div>
            <div className="3/12">
                <p className="whitespace-nowrap text-sm">selling price</p>
                <p className="text-center text-sm font-bold">135 <span>Tk</span></p>
            </div>

            <div className="w-1/12 ml-2 ">
                <svg className="w-[25px]" xmlns="http://www.w3.org/2000/svg" id="delete" x="0" y="0" version="1.1" viewBox="0 0 29 29" ><path d="M19.795 27H9.205a2.99 2.99 0 0 1-2.985-2.702L4.505 7.099A.998.998 0 0 1 5.5 6h18a1 1 0 0 1 .995 1.099L22.78 24.297A2.991 2.991 0 0 1 19.795 27zM6.604 8 8.21 24.099a.998.998 0 0 0 .995.901h10.59a.998.998 0 0 0 .995-.901L22.396 8H6.604z"></path><path d="M26 8H3a1 1 0 1 1 0-2h23a1 1 0 1 1 0 2zM14.5 23a1 1 0 0 1-1-1V11a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1zM10.999 23a1 1 0 0 1-.995-.91l-1-11a1 1 0 0 1 .905-1.086 1.003 1.003 0 0 1 1.087.906l1 11a1 1 0 0 1-.997 1.09zM18.001 23a1 1 0 0 1-.997-1.09l1-11c.051-.55.531-.946 1.087-.906a1 1 0 0 1 .905 1.086l-1 11a1 1 0 0 1-.995.91z"></path><path d="M19 8h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-8-2h7V4h-7v2z"></path></svg>
            </div>
        </div>

    </>
    )
}

export default CheckOutCartItem