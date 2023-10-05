import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Home() {
    // const names = ['Harish', 'Lokesh', 'Karthik', 'Ganesh', 'Tarun', 'Pradeep'];
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const _products = [
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
                avgRating: 4.3
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
                avgRating: 4
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
                avgRating: 4
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
                avgRating: 4
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
                avgRating: 4
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
                avgRating: 4
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
                avgRating: 4
            }     
        ];
        setProducts(_products);
        setFilteredProducts(_products);
    }, []); 
    const onChangeSearchQuery = (value) => {
        setSearchQuery(value);
    };
    useEffect(() => {
        if (searchQuery.length > 0) {
            const _filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredProducts(_filteredProducts);
        }
    }, [searchQuery]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Search query:</label>
                    <input type="text" value={searchQuery} onChange={(event) => onChangeSearchQuery(event.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter search query..."/>
                </div>
                </div>
            </div>
            {filteredProducts.map((product, index) => (
                <div className="row py-4 border-bottom" key={index}>
                    <div className="col-sm-3 text-center">
                        <img src={product.imgSrc} width="160px" />
                    </div>  
                    <div className="col-sm-6">
                        <h3><Link to={`/product-details/${product.id}/product-description?id=${product.id}&name=${product.name}`}>{product.name}</Link></h3>
                        <ul>
                            {product.specifications.map(specification => (
                                <li key={specification}>{specification}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-sm-3 text-center">
                        <h3>{product.price}</h3>
                        <button className="btn btn-success">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home;