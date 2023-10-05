import { useEffect, useState } from 'react';
import { useParams, useSearchParams, Outlet, Link } from 'react-router-dom';

function ProductDetails() {
    const { productId } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)',
            price: 9599,
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
                '16.76 cm (6.6 inch) Full HD+ Display',
                '50MP + 5MP + 2MP | 8MP Front Camera',
                '6000 mAh Lithium Ion Battery',
                'Exynos 850 Processor',
                '1 Year Warranty Provided By the Manufacturer from Date of Purchase'
            ],
            avgRating: 4.3,
            productImgSrcs: [
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/4/o/-original-imagfz7yvktcmbrf.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/a/2/-original-imagfhu6v79ywszn.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/p/l/-original-imagfhu6jrjqu3ea.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70'
            ]
        },
        {
            id: 2,
            name: 'realme 11x 5G (Midnight Black, 128 GB)',
            price: 15999,
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/i/v/-original-imagspfa2gpdzuzk.jpeg?q=70',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
                '16.76 cm (6.6 inch) Full HD+ Display',
                '50MP + 5MP + 2MP | 8MP Front Camera',
                '6000 mAh Lithium Ion Battery',
                'Exynos 850 Processor',
                '1 Year Warranty Provided By the Manufacturer from Date of Purchase'
            ],
            avgRating: 4,
            productImgSrcs: [
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/4/o/-original-imagfz7yvktcmbrf.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/a/2/-original-imagfhu6v79ywszn.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/p/l/-original-imagfhu6jrjqu3ea.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70'
            ]
        },
        {
            id: 3,
            name: 'realme C51 (Carbon Black, 64 GB)',
            price: 8999,
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/8/s/-original-imagt2ffvjkmk2gg.jpeg?q=70',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
                '16.76 cm (6.6 inch) Full HD+ Display',
                '50MP + 5MP + 2MP | 8MP Front Camera',
                '6000 mAh Lithium Ion Battery',
                'Exynos 850 Processor',
                '1 Year Warranty Provided By the Manufacturer from Date of Purchase'
            ],
            avgRating: 4,
            productImgSrcs: [
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/4/o/-original-imagfz7yvktcmbrf.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/a/2/-original-imagfhu6v79ywszn.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/p/l/-original-imagfhu6jrjqu3ea.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70'
            ]
        },
        {
            id: 4,
            name: 'POCO C51 (Power Black, 64 GB)',
            price: 6499,
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/t/a/c51-mzb0e6din-poco-original-imagzdzzraqzsrzc.jpeg?q=70',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
                '16.76 cm (6.6 inch) Full HD+ Display',
                '50MP + 5MP + 2MP | 8MP Front Camera',
                '6000 mAh Lithium Ion Battery',
                'Exynos 850 Processor',
                '1 Year Warranty Provided By the Manufacturer from Date of Purchase'
            ],
            avgRating: 4,
            productImgSrcs: [
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/4/o/-original-imagfz7yvktcmbrf.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/a/2/-original-imagfhu6v79ywszn.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/p/l/-original-imagfhu6jrjqu3ea.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70'
            ]
        },
        {
            id: 5,
            name: 'REDMI 12 (Moonstone Silver, 128 GB)',
            price: 9999,
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
                '16.76 cm (6.6 inch) Full HD+ Display',
                '50MP + 5MP + 2MP | 8MP Front Camera',
                '6000 mAh Lithium Ion Battery',
                'Exynos 850 Processor',
                '1 Year Warranty Provided By the Manufacturer from Date of Purchase'
            ],
            avgRating: 4,
            productImgSrcs: [
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/4/o/-original-imagfz7yvktcmbrf.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/a/2/-original-imagfhu6v79ywszn.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/p/l/-original-imagfhu6jrjqu3ea.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70'
            ]
        },
        {
            id: 6,
            name: 'Infinix HOT 20 Play (Aurora Green, 64 GB)',
            price: 7999,
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/b/e/-original-imagkgrxdzzjuguw.jpeg?q=70',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
                '16.76 cm (6.6 inch) Full HD+ Display',
                '50MP + 5MP + 2MP | 8MP Front Camera',
                '6000 mAh Lithium Ion Battery',
                'Exynos 850 Processor',
                '1 Year Warranty Provided By the Manufacturer from Date of Purchase'
            ],
            avgRating: 4,
            productImgSrcs: [
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/4/o/-original-imagfz7yvktcmbrf.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/a/2/-original-imagfhu6v79ywszn.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/p/l/-original-imagfhu6jrjqu3ea.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70'
            ]
        },
        {
            id: 7,
            name: 'POCO C50 (Royal Blue, 32 GB)',
            price: 5499,
            imgSrc: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/a/x/-original-imaghmtch6qfmfxg.jpeg?q=70',
            specifications: [
                '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
                '16.76 cm (6.6 inch) Full HD+ Display',
                '50MP + 5MP + 2MP | 8MP Front Camera',
                '6000 mAh Lithium Ion Battery',
                'Exynos 850 Processor',
                '1 Year Warranty Provided By the Manufacturer from Date of Purchase'
            ],
            avgRating: 4,
            productImgSrcs: [
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/9/4/o/-original-imagfz7yvktcmbrf.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/a/2/-original-imagfhu6v79ywszn.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/p/l/-original-imagfhu6jrjqu3ea.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70',
                'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/m/g/-original-imagfhu6axvqzpzv.jpeg?q=70'
            ]
        }     
    ]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const [currentImgSrc, setCurrentImgSrc] = useState('');
    useEffect(() => {
        const filteredProduct = products.find(product => product.id == productId);
        setSelectedProduct(filteredProduct);
        console.log(searchParams.get('id'), searchParams.get('name'));
        setCurrentImgSrc(filteredProduct.productImgSrcs[0]);
    }, []);
    return (
        <div className="container">
            <div className="row my-2">
                <div className="col-sm-4">
                    <div className="row">
                        <div className="col-sm-3">
                            {selectedProduct.productImgSrcs && selectedProduct.productImgSrcs.map(imgSrc => (
                                <div className='text-center border m-2 p-2'>
                                    <img className="img-fluid" style={{'height': '110px', cursor: 'pointer'}} onClick={() => setCurrentImgSrc(imgSrc)} src={imgSrc} />
                                </div>
                            ))}
                        </div>
                        <div className="col-sm-9 text-center">
                            <img className='img-fluid' style={{height: '300px'}} src={currentImgSrc} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-8">
                    <h2>{selectedProduct.name}</h2>
                    <h3>{selectedProduct.price}</h3>
                    <div>
                        <ul>
                            {selectedProduct.specifications && selectedProduct.specifications.map(specification => (
                                <li key={specification}>{specification}</li>
                            ))}
                        </ul>
                    </div>
                    <button className="btn btn-success">Add to Cart</button>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link class="nav-link active" aria-current="page" to='product-description'>Product Description</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to='product-specifications'>Product Specifications</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to='rating-reviews'>Ratings & Reviews</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;