import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

function ProductDescription() {
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
            ],
            productDescription: [
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
            ],
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
            ],
            productDescription: [
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
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
            ],
            productDescription: [
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
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
            ],
            productDescription: [
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
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
            ],
            productDescription: [
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
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
            ],
            productDescription: [
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
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
            ],
            productDescription: [
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
                {   
                    title: 'Dashing Display',
                    description: 'The Samsung Galaxy F13 boasts an exceptional 16.62 cm (6.6) FHD+ LCD Display that delivers a cinematic visual experience with stunning picture quality. Thus, you can seamlessly immerse yourself into your favourite movie with enhanced precision.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/54616a0dcbf645fa9b071a59e3e35457_18189cbc69e_image.jpeg?q=90'
                },
                {   
                    title: 'Superior Toughness',
                    description: 'Thanks to the Gorilla Glass 5 adapted into this smartphone’s screen which protects it from inadvertent falls and scratches. This way you can carry your phone anywhere without any inhibition.',
                    imgSrc: 'https://rukminim2.flixcart.com/image/200/200/cms-rpd-images/bcd4eabd45c74a9d8454453f00a9dd93_18189cbe485_image.jpeg?q=90'
                },
            ]
        }     
    ]);
    const { productId } = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});
    useEffect(() => {
        const filteredProduct = products.find(product => product.id == productId);
        setSelectedProduct(filteredProduct);
    }, []);
    return (
        <div className="container">
            {selectedProduct.productDescription && selectedProduct.productDescription.map((description, index) => (
                <div className="row my-4">
                    {index % 2 === 0 ? (
                        <React.Fragment>
                            <div className='col-sm-9'>
                                <h3>{description.title}</h3>
                                <p>{description.description}</p>
                            </div>
                            <div className="col-sm-3">
                                <img src={description.imgSrc} />
                            </div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <div className="col-sm-3">
                                <img src={description.imgSrc} />
                            </div>
                            <div className='col-sm-9'>
                                <h3>{description.title}</h3>
                                <p>{description.description}</p>
                            </div>
                        </React.Fragment>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProductDescription;