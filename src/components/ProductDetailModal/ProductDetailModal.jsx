import ProductDetail from "../productDetails/ProductDetail"

/* eslint-disable react/prop-types */
const ProductDetailModal = ({ productDetail }) => {
    // console.log(productDetail, 'prodsjafk')
    return (
        <dialog id="my_modal_3" className="modal bg-white">
            <ProductDetail productDetail={productDetail}></ProductDetail>
        </dialog>
    )
}

export default ProductDetailModal