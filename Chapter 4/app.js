import React from "react";
import ReactDOM from "react-dom/client";
/*
-----------------npm--------------------

npm init // creates package.json
npm init -Y //(-Y skip up list of option )
npm install react (or) npm i react
npm install react-dom (or) npm i react-dom
npm install parcel
npm install -D parcel (or) npm install --save-dev parcel // for DevDependencies
npx parcel index.html // to start which file should execute to create a local server
npm run start (or) npm start // to run the server

npx parcel build index.html // for build command
npm run build // for build command

uninstall parcel:-
----------------
npm uninstall parcel
npm uninstall -g parcel

*/

/* 
For creating a swiggy kind of restaurants site: we need components like
- Header
 -- Logo
 -- Nav items
 -- Cart Icon
- Body
 -- search bar
 -- Restaurant Section
    -- Restaurant items
        -- image
        -- food name
        -- Ratings
        -- Cuisines
        -- Prices
- footer
 -- Quick Links
 -- Copyrights

*/
const Title = () =>  ( <img alt="Food Villa Logo" className="logo_wrap" 
                            src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"/> ) 
const Header = () => {
    return (
        <div className="header">    
            <Title/> {/* const Title = () =>*/}
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
        </div>
    )
};

// const KFC = {
//     name : "KFC",
//     image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
//     cuisines : ["South Indian", "Italian", "American"],
//     ratings : "4.3"
// }

const seeAllRestaurants = [
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "61498",
            "name": "Geetha Canteen",
            "uuid": "b7ee2f26-436b-451b-9e7c-009852dd0f3e",
            "city": "14",
            "area": "Ram Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "umytjvfc7xy5xxhlbmig",
            "cuisines": [
              "South Indian"
            ],
            "tags": [],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 1.7000000476837158,
            "slugs": {
              "restaurant": "geetha-canteen-ram-nagar-gandhipuram",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "109, Kalingarayan Street, Ram Nagar, Gandhipuram, Coimbatore",
            "locality": "Kalingarayan Street",
            "parentId": 6459,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "FLAT75 off",
              "shortDescriptionList": [
                {
                  "meta": "FLAT75 off | Use SNACKSBINGE",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT75 off | Use SNACKSBINGE",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹75 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use SNACKSBINGE",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT75 off | Use SNACKSBINGE",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5638278~p=1~eid=00000185-be0c-1777-46a0-0f7d0019010a",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "1.7 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "61498",
              "deliveryTime": 26,
              "minDeliveryTime": 26,
              "maxDeliveryTime": 26,
              "lastMileTravel": 1.7000000476837158,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.2",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "56070",
            "name": "Sree Annapoorna",
            "uuid": "b27efa4b-9f99-49f9-b89e-7d9259c6185f",
            "city": "14",
            "area": "Tatabad",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "hcezbyzjetnxbcjlprw8",
            "cuisines": [
              "Indian",
              "South Indian",
              "North Indian",
              "Chinese",
              "Desserts"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 1.100000023841858,
            "slugs": {
              "restaurant": "sree-annapoorna-mettupalayam-road-sai-baba-colony",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "Annapoorna Annex, Mettupalayam Rd, Tatabad, Coimbatore, Tamil Nadu 641043, India",
            "locality": "Mettupalayam Road",
            "parentId": 4732,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "1.1 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "56070",
              "deliveryTime": 23,
              "minDeliveryTime": 23,
              "maxDeliveryTime": 23,
              "lastMileTravel": 1.100000023841858,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "575570",
            "name": "Nagerkovil Arya Bhavan",
            "uuid": "e7a673f5-99bb-45fd-a9b9-f637fa3da1f8",
            "city": "14",
            "area": "Peelamedu",
            "totalRatingsString": "5000+ ratings",
            "cloudinaryImageId": "yj6g7wugbi5qbvjtoqmr",
            "cuisines": [
              "South Indian",
              "Chinese"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 38,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 45,
            "slaString": "35-45 MINS",
            "lastMileTravel": 4.900000095367432,
            "slugs": {
              "restaurant": "nagercoil-catering-private-limited(nagerkovil-ary-peelamedu-peelamedu",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "No:751, AVINASHI ROAD, NEAR SUGUNA KALYANA MANDAPAM,PEELAMEDU,COIMBATORE-641004 , Coimbatore Corporation Ward-39, Coimbatore, Tamil Nadu-641004",
            "locality": "Avinashi Road",
            "parentId": 353249,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "30% off",
              "shortDescriptionList": [
                {
                  "meta": "30% off | Use JUMBO",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "30% off up to ₹150 on orders above ₹350 | Use code JUMBO",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "30% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use JUMBO",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "30% off up to ₹150 on orders above ₹350 | Use code JUMBO",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5714879~p=4~eid=00000185-be0c-1777-46a0-0f7e00190444",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "4.9 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "575570",
              "deliveryTime": 38,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 45,
              "lastMileTravel": 4.900000095367432,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.4",
            "totalRatings": 5000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "221141",
            "name": "Ck's Bakery Ram Nagar",
            "uuid": "a2a44319-23cd-4a10-a0a8-d3b4e47309bf",
            "city": "14",
            "area": "Ram Nagar",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "hagxmp4ffwxjujo217kc",
            "cuisines": [
              "Bakery"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "slaString": "31 MINS",
            "lastMileTravel": 0.8999999761581421,
            "slugs": {
              "restaurant": "ck's-bakery-ram-nagar-gandhipuram-gandhipuram",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "12/121,Rajaji Road,Near Kannan Departmental store,Ramnagar,Coimbatore - 641009.",
            "locality": "Gandhipuram",
            "parentId": 63598,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "FLAT125 off",
              "shortDescriptionList": [
                {
                  "meta": "FLAT125 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT125 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹125 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT125 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "0.8 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "221141",
              "deliveryTime": 31,
              "minDeliveryTime": 31,
              "maxDeliveryTime": 31,
              "lastMileTravel": 0.8999999761581421,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 20,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "60005",
            "name": "Thirupathi Mess",
            "uuid": "b53ff523-e402-43fd-b65b-93913351483e",
            "city": "14",
            "area": "Sowripalayam Pirivu",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "bzwckbvw6k8ncyw3lkfi",
            "cuisines": [
              "South Indian",
              "Indian"
            ],
            "tags": [],
            "costForTwo": 10000,
            "costForTwoString": "₹100 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 6,
            "slugs": {
              "restaurant": "thirupathi-mess-thiruvalluvar-nagar-ramanathapuram",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "97, Thiruvalluvar Nagar, Ramanathapuram, Cbe - 45",
            "locality": "Thiruvalluvar Nagar",
            "parentId": 215840,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "10% off",
              "shortDescriptionList": [
                {
                  "meta": "10% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off up to ₹40 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "10% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "10% off up to ₹40 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5637957~p=7~eid=00000185-be0c-1777-46a0-0f7f0019075a",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "6 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "60005",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 6,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "497534",
            "name": "ARYAAS",
            "uuid": "813633e6-5bcf-4d86-8d32-e97c4251a622",
            "city": "14",
            "area": "Gandhipuram",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "xcyvurygduydxjopx1ai",
            "cuisines": [
              "North Indian",
              "Chinese",
              "South Indian",
              "Bakery"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "slaString": "26 MINS",
            "lastMileTravel": 1.100000023841858,
            "slugs": {
              "restaurant": "aryaas-gandhipuram-gandhipuram-2",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "No 990, Cross Cut Road, Opposite Lakshmi Complex, Gandhipuram, Coimbatore - 641012",
            "locality": "Cross Cut Road",
            "parentId": 18925,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": "Closes soon"
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "1.1 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "497534",
              "deliveryTime": 26,
              "minDeliveryTime": 26,
              "maxDeliveryTime": 26,
              "lastMileTravel": 1.100000023841858,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.3",
            "totalRatings": 20,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "83282",
            "name": "Aagaaram Restaurant",
            "uuid": "5caf484b-ca18-4aa7-960e-1da6c8a4cd7a",
            "city": "14",
            "area": "Thudiyalur",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "v4pra60sb3enhkivcxkm",
            "cuisines": [
              "South Indian"
            ],
            "tags": [],
            "costForTwo": 25000,
            "costForTwoString": "₹250 FOR TWO",
            "deliveryTime": 37,
            "minDeliveryTime": 37,
            "maxDeliveryTime": 37,
            "slaString": "37 MINS",
            "lastMileTravel": 5.599999904632568,
            "slugs": {
              "restaurant": "aagaram-restaurant-thudiyalur-kavundampalayam",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "11/34B, Udayampalayam Road, Pallakattu Thottam, GN Mills, Thudiyalur, Coimbatore",
            "locality": "Gn Mills",
            "parentId": 17985,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "FLAT150 off",
              "shortDescriptionList": [
                {
                  "meta": "FLAT150 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT150 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹150 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT150 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5637707~p=10~eid=00000185-be0c-1777-46a0-0f8000190a13",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "5.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "83282",
              "deliveryTime": 37,
              "minDeliveryTime": 37,
              "maxDeliveryTime": 37,
              "lastMileTravel": 5.599999904632568,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.0",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "99246",
            "name": "A - Z Palamudir Nilayam",
            "uuid": "9dc7175a-30f1-437a-b2a2-be42de0bd847",
            "city": "14",
            "area": "Ram Nagar",
            "totalRatingsString": "50+ ratings",
            "cloudinaryImageId": "dsm2nlg3erurwd4lgpzy",
            "cuisines": [
              "Juices"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "slaString": "23 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
              "restaurant": "a-z-palamudir-nilayam-gandhipuram-gandhipuram",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "No 352, Nehru Street, Ram Nagar, Gandhipuram, Coimbatore",
            "locality": "Gandhipuram",
            "parentId": 24516,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "99246",
              "deliveryTime": 23,
              "minDeliveryTime": 23,
              "maxDeliveryTime": 23,
              "lastMileTravel": 1.2000000476837158,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 50,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "581095",
            "name": "SALEM RAVICHANDRAN TIFFIN HOUSE",
            "uuid": "0ec57bd2-f73d-4a35-87d2-786118281e33",
            "city": "14",
            "area": "Gandhipuram",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "pyvbsjurzt23hmrs3bge",
            "cuisines": [
              "South Indian",
              "North Indian",
              "Chinese"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "slaString": "28 MINS",
            "lastMileTravel": 1.2000000476837158,
            "slugs": {
              "restaurant": "salem-ravichandran-tiffin-house-gandhipuram-gandhipuram",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "NO 303,VARAHA TOWERS,PERANAIDU LAYOUT,RAM NAGAR,COIMBATORE",
            "locality": "Varaha Towers",
            "parentId": 18144,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "1.2 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "581095",
              "deliveryTime": 28,
              "minDeliveryTime": 28,
              "maxDeliveryTime": 28,
              "lastMileTravel": 1.2000000476837158,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.2",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "51014",
            "name": "A2B - Adyar Ananda Bhavan",
            "uuid": "2c876628-652b-4163-8ddf-fb7fe1e0f101",
            "city": "14",
            "area": "Balasundaram Layout",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "jlqmqtcbgxu3ype0idyq",
            "cuisines": [
              "South Indian",
              "North Indian",
              "Sweets",
              "Chinese"
            ],
            "tags": [],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 2.5,
            "slugs": {
              "restaurant": "adyar-ananda-bhavan-gandhipuram-r-s-puram",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "313, Bhartiyar Road, Gandhipuram, Coimbatore",
            "locality": "Gandhipuram",
            "parentId": 22,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "FLAT100 off",
              "shortDescriptionList": [
                {
                  "meta": "FLAT100 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT100 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹100 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT100 off | Use FLATDEAL",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5730131~p=13~eid=00000185-be0c-1777-46a0-0f8100190d0f",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "2.5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "51014",
              "deliveryTime": 30,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 30,
              "lastMileTravel": 2.5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "51335",
            "name": "Shree Anandhaas",
            "uuid": "cef86e2b-2987-4c81-8320-1643a27c1875",
            "city": "14",
            "area": "Ram Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "tglkocgx1bejjhxble9t",
            "cuisines": [
              "South Indian",
              "North Indian",
              "Chinese"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "slaString": "24 MINS",
            "lastMileTravel": 1.600000023841858,
            "slugs": {
              "restaurant": "shree-anandhaas-gandhipuram-r-s-puram",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "67, Malaviya Street, Ramnagar, Gandhipuram, Coimbatore",
            "locality": "Gandhipuram",
            "parentId": 4735,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "40% off",
              "shortDescriptionList": [
                {
                  "meta": "40% off | Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹80 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "40% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹80 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "1.6 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "51335",
              "deliveryTime": 24,
              "minDeliveryTime": 24,
              "maxDeliveryTime": 24,
              "lastMileTravel": 1.600000023841858,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.5",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "105010",
            "name": "LunchBox - Meals and Thalis",
            "uuid": "905d1e64-2bab-468c-b753-cb31c87c7227",
            "city": "14",
            "area": "Ranganathapuram",
            "totalRatingsString": "100+ ratings",
            "cloudinaryImageId": "wxvjhjqs738msc1xzglc",
            "cuisines": [
              "North Indian",
              "Punjabi",
              "Biryani",
              "Healthy Food",
              "Jain",
              "Thalis",
              "Indian",
              "Mughlai",
              "Desserts"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 1.399999976158142,
            "slugs": {
              "restaurant": "lunchbox-mettupalayam-road-r-s-puram",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "No 653-659, 1st Floor, Mettupalayam road, RS Puram, Near Syndicate Bank, Coimbatore 641002",
            "locality": "Mettupalayam road",
            "parentId": 4925,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "1.3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "105010",
              "deliveryTime": 29,
              "minDeliveryTime": 29,
              "maxDeliveryTime": 29,
              "lastMileTravel": 1.399999976158142,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 100,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "58683",
            "name": "Sree Annapoorna Sweets & Savouries",
            "uuid": "5b1ae884-6a1f-40c4-aa8c-863bad0a309a",
            "city": "14",
            "area": "Tatabad",
            "totalRatingsString": "20+ ratings",
            "cloudinaryImageId": "ibzbhvbgvk4llz19wmpy",
            "cuisines": [
              "Desserts"
            ],
            "tags": [],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "slaString": "27 MINS",
            "lastMileTravel": 1.100000023841858,
            "slugs": {
              "restaurant": "sree-annapoorna-sweets-savouries-mettupalayam-road-sai-baba-colony",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "Annapoorna Annex, Mettupalayam Rd, Tatabad, Coimbatore, Tamil Nadu 641043, India",
            "locality": "Mettupalayam Road",
            "parentId": 193072,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "50% off",
              "shortDescriptionList": [
                {
                  "meta": "50% off | Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹90 | Use code WELCOME50",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "1.1 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "58683",
              "deliveryTime": 27,
              "minDeliveryTime": 27,
              "maxDeliveryTime": 27,
              "lastMileTravel": 1.100000023841858,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.4",
            "totalRatings": 20,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "59481",
            "name": "Ayyappa's Pearl Veg Restaurant",
            "uuid": "2493ddf1-22b9-47c8-b2d5-38129957181a",
            "city": "14",
            "area": "Koundampalayam",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "hlosjhn7xwschzoo8puo",
            "cuisines": [
              "South Indian",
              "Chinese"
            ],
            "tags": [],
            "costForTwo": 15000,
            "costForTwoString": "₹150 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 5,
            "slugs": {
              "restaurant": "ayyappas-pearl-veg-restaurant-kavundampalayam-sai-baba-colony",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "9A, MTP Road, Kavundampalayam, Coimbatore",
            "locality": "Kavundampalayam",
            "parentId": 18415,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "FLAT75 off",
              "shortDescriptionList": [
                {
                  "meta": "FLAT75 off | Use BFBINGE",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT75 off | Use BFBINGE",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "₹75 OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use BFBINGE",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "FLAT75 off | Use BFBINGE",
                  "discountType": "Flat",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=5638001~p=19~eid=00000185-be0c-1777-46a0-0f8300191356",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "5 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "59481",
              "deliveryTime": 29,
              "minDeliveryTime": 29,
              "maxDeliveryTime": 29,
              "lastMileTravel": 5,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "50456",
            "name": "Burger King",
            "uuid": "c325da1a-86c3-437d-a265-760e438d3f40",
            "city": "14",
            "area": "R S Puram West",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "fdl3w5jeer5b6t9ivcj5",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "tags": [],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "slaString": "35 MINS",
            "lastMileTravel": 2.0999999046325684,
            "slugs": {
              "restaurant": "burger-king-brookefields-mallkrishnaswamy-road-gandhipuram",
              "city": "coimbatore"
            },
            "cityState": "14",
            "address": "Burger King India Pvt Ltd, Brookefields Mall, No: 67 to 71, Unit No: T-17& 18, Third Floor, Krishnaswamy Road, Coimbatore ? 641 001",
            "locality": "Brookefields Mall,Krishnaswamy Road",
            "parentId": 166,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [],
            "aggregatedDiscountInfo": {
              "header": "60% off",
              "shortDescriptionList": [
                {
                  "meta": "60% off | Use STEALDEAL",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code STEALDEAL",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
              "header": "60% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use STEALDEAL",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "60% off up to ₹120 | Use code STEALDEAL",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "subHeader": "",
              "headerType": 0,
              "superFreedel": ""
            },
            "chain": [],
            "feeDetails": {
              "fees": [],
              "totalFees": 0,
              "message": "",
              "title": "",
              "amount": "",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
              "imageBased": [],
              "textBased": [],
              "textExtendedBadges": []
            },
            "lastMileTravelString": "2 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "50456",
              "deliveryTime": 35,
              "minDeliveryTime": 35,
              "maxDeliveryTime": 35,
              "lastMileTravel": 2.0999999046325684,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "4.1",
            "totalRatings": 1000,
            "new": false
          },
          "subtype": "basic"
        }
      ]
/*
const RestaurantCards = () => {
    return (
            <div className="restaurantCard">
                <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+seeAllRestaurants[0].data?.cloudinaryImageId} />
                <h3>{seeAllRestaurants[0].data?.name}</h3>
                <h4>{seeAllRestaurants[0].data?.cuisines.join(", ")}</h4>
                <h5>{seeAllRestaurants[0].data?.avgRating} Stars</h5>
            </div>
    )
}
*/
/*
const Body = () => {
    return ( <div className="body">
                <div className="restaurantCards">
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                    <RestaurantCards/>
                </div>
            </div> );
    }
*/
/*
const RestaurantCards = (props) => {
    return (
            <div className="restaurantCard">
                <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId} />
                <h3>{props.restaurant.data?.name}</h3>
                <h4>{props.restaurant.data?.cuisines.join(", ")}</h4>
                <h5>{props.restaurant.data?.avgRating} Stars</h5>
            </div>
    )
}
*/
/*
const RestaurantCards = ({restaurant}) => { // destructuring props to {restaurant}
    return (
            <div className="restaurantCard">
                <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant.data?.cloudinaryImageId} />
                <h3>{restaurant.data?.name}</h3>
                <h4>{restaurant.data?.cuisines.join(", ")}</h4>
                <h5>{restaurant.data?.avgRating} Stars</h5>
            </div>
    )
}
*/
/*
const RestaurantCards = ({restaurant}) => { // we can destructure even this
    const {cloudinaryImageId, name, cuisines, avgRating} = restaurant.data;
    return (
            <div className="restaurantCard">
                <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h5>{avgRating} Stars</h5>
            </div>
    )
}
const Body = () => {
    return ( <div className="body">
                <div className="restaurantCards">
                    <RestaurantCards restaurant= {seeAllRestaurants[0]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[1]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[2]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[3]}/> 
                    <RestaurantCards restaurant= {seeAllRestaurants[4]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[5]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[6]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[7]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[8]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[9]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[10]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[11]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[12]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[13]}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[14]}/>
                </div>
            </div> );
    }
*/
const RestaurantCards = ({cloudinaryImageId, name, cuisines, avgRating}) => { // we can destructure even this
    return (
        <div className="restaurantCard">
            <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} Stars</h5>
        </div>
    )
}
/*
const Body = () => {
    return ( <div className="body">
                <div className="restaurantCards">
                    
                    { <RestaurantCards restaurant= {seeAllRestaurants[3].data}/> 
                    <RestaurantCards restaurant= {seeAllRestaurants[4].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[5].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[6].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[7].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[8].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[9].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[10].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[11].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[12].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[13].data}/>
                    <RestaurantCards restaurant= {seeAllRestaurants[14].data}/> }

                    <RestaurantCards cloudinaryImageId= {seeAllRestaurants[0].data.cloudinaryImageId} name= {seeAllRestaurants[0].data.name} cuisines= {seeAllRestaurants[0].data.cuisines}/>
                    <RestaurantCards cloudinaryImageId= {seeAllRestaurants[1].data.cloudinaryImageId} name= {seeAllRestaurants[1].data.name} cuisines= {seeAllRestaurants[1].data.cuisines}/>
                    <RestaurantCards cloudinaryImageId= {seeAllRestaurants[2].data.cloudinaryImageId} name= {seeAllRestaurants[2].data.name} cuisines= {seeAllRestaurants[2].data.cuisines}/> 
                    
                    <RestaurantCards {...seeAllRestaurants[0].data}/>
                    <RestaurantCards {...seeAllRestaurants[1].data}/>
                    <RestaurantCards {...seeAllRestaurants[2].data}/>
                    <RestaurantCards {...seeAllRestaurants[3].data}/>
                    <RestaurantCards {...seeAllRestaurants[4].data}/>
                    <RestaurantCards {...seeAllRestaurants[5].data}/>
                    <RestaurantCards {...seeAllRestaurants[6].data}/>
                    <RestaurantCards {...seeAllRestaurants[7].data}/>
                    <RestaurantCards {...seeAllRestaurants[8].data}/>
                    <RestaurantCards {...seeAllRestaurants[9].data}/>
                    <RestaurantCards {...seeAllRestaurants[10].data}/>
                    <RestaurantCards {...seeAllRestaurants[11].data}/>
                    <RestaurantCards {...seeAllRestaurants[12].data}/>
                    <RestaurantCards {...seeAllRestaurants[13].data}/>
                    <RestaurantCards {...seeAllRestaurants[14].data}/>

                </div>
            </div> );
    } */
const Body = () => { 
    return ( <div className="body">
                <div className="restaurantCards"> 
                    {/* // now we are using for loop function for map() */}
                    {seeAllRestaurants.map((restaurantcard) => {
                        return <RestaurantCards {...restaurantcard.data} key={restaurantcard.data.id} />
                    })}
                </div>
        </div> );
} 
const Footer = () => {
    return ( <div className="footer">
                <h4>Footer</h4> 
            </div> );
}
const AppLayout = () => (
        <React.Fragment>
            <div className="container">
                <Header/>
                <Body/>
                <Footer/>
            </div>
       </React.Fragment>
)
const root = ReactDOM.createRoot (document.getElementById("root"));
root.render(<AppLayout/>);