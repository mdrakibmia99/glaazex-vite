/* eslint-disable react/prop-types */
import { useState } from "react";



const SelectImage = ({detailImage}) => {

    const [selectedImage, setSelectedImage] = useState('')
    const showPreview = (imageUrl) => {
        setSelectedImage(imageUrl);
    };
    return (
        <div className='sm:w-full ld:m-5/12 md:w-5/12 mr-3 md' >
            <div className='w-full '>
                <div className=" mt-4  border-black flex items-center justify-center rounded ">
                    <img src={selectedImage || detailImage[0].imageUrl} alt="Preview Image"
                        className="object-contain w-full md:w-10/12 lg:w-10/12 h-[300px] shadow-md" />
                </div>
                <div className="flex item-center">
                    <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap">
                        {detailImage.map((item, index) => (
                            <img
                                key={index}
                                src={item.imageUrl}
                                onClick={() => showPreview(item.imageUrl)}
                                className="m-2 shadow border-2 border-[black] hover:scale-105 ease-in-out duration-300  w-[100px] h-[100px] inline-block mx-3 mt-2" />
                        ))}
                    </div>
                </div>
                {/* <div className="flex item-center">
        {cartItems.map((item) => (
            <div
                className={`m-3 w-[100px] h-[100px]  cursor-pointer border ${selectedImage === item.imageUrl ? 'border-red-500' : ''
                    }`}
                key={item.id}
                onClick={() => showPreview(item.imageUrl)}
            >
                <img src={item.imageUrl} alt={item.alt} className="w-full h-full" />
            </div>
        ))}
    </div> */}
            </div>
        </div>
    )
}

export default SelectImage