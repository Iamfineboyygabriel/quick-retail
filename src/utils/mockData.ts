import dollar from "../../src/assets/images/dollarSign.png";
import orders from "../../src/assets/images/orders.png";
import customer from "../../src/assets/images/customers.png";
import orangeBox from "../../src/assets/images/orangeBox.png";
import goldBox from "../../src/assets/images/goldBox.png";
import greenBox from "../../src/assets/images/greenBox.png";
import house from "../../src/assets/images/house.png";
import { BlueUserIcon, PinkUserIcon, PurpleUserIcon } from "../assets/svg";

export const analyticsData = [
  {
    title: "Total Revenue Generated",
    value: "$921,345",
    icon: dollar,
    iconColor: "#E17036",
    textColor: "white",
    cardBgColor: "linear-gradient(to bottom, #F16722, #B63D00)",
    percentageValue: 0.5,
    altText: "dollar-sign",
  },

  {
    title: "total orders",
    value: "1,453",
    icon: orders,
    iconColor: "#E17036",
    cardBgColor: "#EFF8FF",
    percentageValue: 0.5,
    borderColor: "#98A2B3",
    altText: "orders-icon",
  },
  {
    title: "Total Customers",
    value: "456",
    icon: customer,
    iconColor: "#E17036",
    cardBgColor: "#F4F3FF",
    percentageValue: 0.5,
    borderColor: "#98A2B3",
    altText: "customer-icon",
  },
];

export const monthlySalesData = [
  { month: "Jan", revenue: 550 },
  { month: "Feb", revenue: 620 },
  { month: "Mar", revenue: 620, highlighted: true, label: "N620M" },
  { month: "Apr", revenue: 600 },
  { month: "May", revenue: 650 },
  { month: "Jun", revenue: 620 },
  { month: "Jul", revenue: 660 },
  { month: "Aug", revenue: 700 },
  { month: "Sep", revenue: 720 },
  { month: "Oct", revenue: 700 },
  { month: "Nov", revenue: 750 },
  { month: "Dec", revenue: 780 },
];

export const customerOrders = [
  {
    id: "#1001",
    timestamp: "12 June, 4:20 PM",
    customer: "John Doe",
    amount: "₦120,000",
    status: "Pending",
    items: 3,
  },
  {
    id: "#1002",
    timestamp: "13 June, 2:15 PM",
    customer: "Alice Smith",
    amount: "₦250,000",
    status: "Paid",
    items: 5,
  },
  {
    id: "#1003",
    timestamp: "14 June, 1:30 PM",
    customer: "David Brown",
    amount: "₦90,000",
    status: "Pending",
    items: 2,
  },
  {
    id: "#1004",
    timestamp: "15 June, 3:45 PM",
    customer: "Sarah Lee",
    amount: "₦300,000",
    status: "Paid",
    items: 7,
  },
  {
    id: "#1005",
    timestamp: "16 June, 12:10 PM",
    customer: "Michael Johnson",
    amount: "₦75,000",
    status: "Pending",
    items: 1,
  },
  {
    id: "#1006",
    timestamp: "17 June, 6:25 PM",
    customer: "Emma Wilson",
    amount: "₦180,000",
    status: "Paid",
    items: 4,
  },
  {
    id: "#1007",
    timestamp: "18 June, 9:50 AM",
    customer: "Olivia Martinez",
    amount: "₦210,000",
    status: "Pending",
    items: 6,
  },
  {
    id: "#1008",
    timestamp: "19 June, 5:40 PM",
    customer: "William Anderson",
    amount: "₦95,000",
    status: "Paid",
    items: 2,
  },
  {
    id: "#1009",
    timestamp: "20 June, 10:15 AM",
    customer: "Sophia Thomas",
    amount: "₦150,000",
    status: "Pending",
    items: 3,
  },
  {
    id: "#1010",
    timestamp: "21 June, 7:30 PM",
    customer: "James White",
    amount: "₦275,000",
    status: "Paid",
    items: 5,
  },
];

export const salesCustomer = [
  {
    usericon: PurpleUserIcon,
    customerName: "Victoria Pascal",
    email: "victoriapascal@gmail.com",
  },
  {
    usericon: PinkUserIcon,
    customerName: "Michael Johnson",
    email: "michaeljohnson@example.com",
  },
  {
    usericon: BlueUserIcon,
    customerName: "Sophia Williams",
    email: "sophiawilliams@example.com",
  },
];

export const productTableData = [
  {
    name: "Sleek Sneakers",
    productCode: "ABC 23456 S BL",
    location: "Warehouse 1",
    category: "Shoes",
    sellingPrice: "₦250,000",
    stockLevel: "3000",
    discountStatus: "Pending",
    items: "Green | Small",
  },
  {
    name: "Sleek Sneakers",
    productCode: "ABC 23456 S BL",
    location: "Warehouse 1",
    category: "Shoes",
    sellingPrice: "₦250,000",
    stockLevel: "3000",
    discountStatus: "Paid",
    items: "Green | Small",
  },
  {
    name: "Sleek Sneakers",
    productCode: "ABC 23456 S BL",
    location: "Warehouse 1",
    category: "Shoes",
    sellingPrice: "₦250,000",
    stockLevel: "3000",
    discountStatus: "Paid",
    items: "Green | Small",
  },
  {
    name: "Sleek Sneakers",
    productCode: "ABC 23456 S BL",
    location: "Warehouse 1",
    category: "Shoes",
    sellingPrice: "₦250,000",
    stockLevel: "3000",
    discountStatus: "Pending",
    items: "Green | Small",
  },
];

export const customerData = [
  { name: "New customers - 60%", value: 60, color: "#F06A4D" },
  { name: "Bounce customers - 20%", value: 20, color: "#223F4A" },
  { name: "Existing customers", value: 10, color: "#FBBD7A" },
];

export const customerAnalysis = [
  {
    label: "New Customers",
    num: "40,000",
    color: "#E76E50",
  },
  {
    label: "Bounce Customers",
    num: "400",
    color: "#223F4A",
  },
  {
    label: "Existing Customers",
    num: "40",
    color: "#FBBD7A",
  },
];

export const paymentData = [
  { label: "Subtotal (1 item)", amount: "₦ 30,000" },
  { label: "Discount", amount: "-" },
  { label: "Tax (7.5% VAT)", amount: "₦ 2,250" },
  { label: "Service fee", amount: "₦ 2,250" },
];

export const returnsAnalyticsData = [
  {
    title: "Total Returned Product",
    value: "185",
    icon: orangeBox,
    iconColor: "#E17036",
    textColor: "white",
    cardBgColor: "linear-gradient(to bottom, #F16722, #B63D00)",
    percentageValue: 0.5,
    altText: "dollar-sign",
  },
  {
    title: "Complaints Pending",
    value: "29",
    icon: goldBox,
    iconColor: "#E17036",
    cardBgColor: "#FEF6E7",
    borderColor: "#98A2B3",
    altText: "orders-icon",
  },
  {
    title: "Complaints Resolved",
    value: "456",
    icon: greenBox,
    iconColor: "#E17036",
    cardBgColor: "#F0FDF9",
    borderColor: "#98A2B3",
    altText: "customer-icon",
  },
];

export const loggedReturn = [
  {
    name: "Sleek Sneakers",
    productCode: "ABC 23456 S BL",
    dateReturned: "13 June 2024, 4:20pm",
    orderId: "ABC 23456 BL",
    customer: "Greatful Erhis",
    returnedReason: "Damages",
    complaintStatus: "Resolved",
  },
  {
    name: "Classic Loafers",
    productCode: "DEF 56789 L BR",
    dateReturned: "14 June 2024, 2:15pm",
    orderId: "DEF 56789 BR",
    customer: "David Johnson",
    returnedReason: "Wrong Size",
    complaintStatus: "Pending",
  },
  {
    name: "Running Shoes",
    productCode: "GHI 34567 R BL",
    dateReturned: "15 June 2024, 5:00pm",
    orderId: "GHI 34567 BL",
    customer: "Mary Smith",
    returnedReason: "Color Mismatch",
    complaintStatus: "Resolved",
  },
  {
    name: "Leather Boots",
    productCode: "JKL 67890 B TN",
    dateReturned: "16 June 2024, 1:30pm",
    orderId: "JKL 67890 TN",
    customer: "Alice Cooper",
    returnedReason: "Damages",
    complaintStatus: "Pending",
  },
  {
    name: "Casual Slippers",
    productCode: "MNO 45678 C BK",
    dateReturned: "17 June 2024, 11:10am",
    orderId: "MNO 45678 BK",
    customer: "Robert Green",
    returnedReason: "Wrong Size",
    complaintStatus: "Resolved",
  },
  {
    name: "Formal Shoes",
    productCode: "PQR 78901 F BR",
    dateReturned: "18 June 2024, 3:45pm",
    orderId: "PQR 78901 BR",
    customer: "Jessica Brown",
    returnedReason: "Color Mismatch",
    complaintStatus: "Pending",
  },
];

export const allCategories = [
  {
    category: "Footwear",
    totalProduct: 150,
    totalAmount: "₦1,200,500.00",
    dateModified: "20 June 2024, 10:15am",
    status: "view",
  },
  {
    category: "Electronics",
    totalProduct: 340,
    totalAmount: "₦5,431,200.00",
    dateModified: "21 June 2024, 2:30pm",
    status: "view",
  },
  {
    category: "Clothing",
    totalProduct: 210,
    totalAmount: "₦3,140,000.00",
    dateModified: "22 June 2024, 1:10pm",
    status: "view",
  },
  {
    category: "Accessories",
    totalProduct: 180,
    totalAmount: "₦980,750.00",
    dateModified: "23 June 2024, 11:50am",
    status: "view",
  },
  {
    category: "Home Appliances",
    totalProduct: 275,
    totalAmount: "₦4,675,300.00",
    dateModified: "24 June 2024, 4:20pm",
    status: "view",
  },
];

export const InventoryTableData = [
  {
    name: "Sleek Sneakers",
    sku: "ABC 23456 S BL",
    location: "Warehouse 1",
    stockLevel: "450 of 500",
    price: "₦250,000",
    date: "24 June 2024, 4:20pm",
    status: "Available",
  },
  {
    name: "Wireless Headphones",
    sku: "DEF 98765 W H",
    location: "Warehouse 2",
    stockLevel: "0 of 200",
    price: "₦120,000",
    date: "22 June 2024, 3:10pm",
    status: "Sold Out",
  },
  {
    name: "Smartwatch Pro",
    sku: "GHI 45678 S P",
    location: "Warehouse 3",
    stockLevel: "50 of 300",
    price: "₦75,000",
    date: "21 June 2024, 11:45am",
    status: "Low Stock",
  },
  {
    name: "Gaming Laptop",
    sku: "JKL 12345 G L",
    location: "Warehouse 1",
    stockLevel: "15 of 100",
    price: "₦850,000",
    date: "20 June 2024, 5:00pm",
    status: "Low Stock",
  },
  {
    name: "4K TV 55-inch",
    sku: "MNO 56789 4K T",
    location: "Warehouse 2",
    stockLevel: "200 of 250",
    price: "₦1,200,000",
    date: "19 June 2024, 2:20pm",
    status: "Available",
  },
  {
    name: "Bluetooth Speaker",
    sku: "PQR 23456 B S",
    location: "Warehouse 3",
    stockLevel: "0 of 150",
    price: "₦95,000",
    date: "18 June 2024, 10:10am",
    status: "Sold Out",
  },
  {
    name: "Portable Air Conditioner",
    sku: "STU 34567 P A",
    location: "Warehouse 1",
    stockLevel: "30 of 500",
    price: "₦450,000",
    date: "17 June 2024, 6:45pm",
    status: "Low Stock",
  },
  {
    name: "Graphic Tablet",
    sku: "VWX 67890 G T",
    location: "Warehouse 2",
    stockLevel: "300 of 350",
    price: "₦220,000",
    date: "16 June 2024, 1:30pm",
    status: "Available",
  },
  {
    name: "Cordless Vacuum Cleaner",
    sku: "YZA 89012 C V",
    location: "Warehouse 3",
    stockLevel: "0 of 200",
    price: "₦310,000",
    date: "15 June 2024, 9:15am",
    status: "Sold Out",
  },
];

export const allCustomers = [
  {
    name: "Ayodeji Ogunbayo",
    date: "13 Jan, 2025",
    contact: "ayoboo@gmail.com",
    number: "08178658171",
    totalAmount: "₦310,000",
    totalTransaction: "40",
    timeStamp: "13 Jun, 2024 4:20",
    status: "Active",
  },
  {
    name: "Chinonso Okafor",
    date: "22 Feb, 2025",
    contact: "chinonso@gmail.com",
    number: "09012345678",
    totalAmount: "₦150,000",
    totalTransaction: "25",
    timeStamp: "12 Jun, 2024 3:10",
    status: "Inactive",
  },
  {
    name: "Fatima Bello",
    date: "5 Mar, 2025",
    contact: "fatimab@gmail.com",
    number: "08098765432",
    totalAmount: "₦525,000",
    totalTransaction: "60",
    timeStamp: "10 Jun, 2024 5:45",
    status: "Active",
  },
  {
    name: "Emeka Eze",
    date: "18 Apr, 2025",
    contact: "emekaeze@gmail.com",
    number: "08122334455",
    totalAmount: "₦410,000",
    totalTransaction: "35",
    timeStamp: "8 Jun, 2024 1:20",
    status: "Inactive",
  },
  {
    name: "Blessing Oke",
    date: "29 May, 2025",
    contact: "blessingoke@gmail.com",
    number: "07056473829",
    totalAmount: "₦620,000",
    totalTransaction: "75",
    timeStamp: "6 Jun, 2024 11:15",
    status: "Active",
  },
  {
    name: "Michael Johnson",
    date: "10 Jun, 2025",
    contact: "michaelj@gmail.com",
    number: "09087654321",
    totalAmount: "₦200,000",
    totalTransaction: "20",
    timeStamp: "4 Jun, 2024 9:30",
    status: "Inactive",
  },
  {
    name: "Oluwaseun Adeyemi",
    date: "15 Jul, 2025",
    contact: "seunadeyemi@gmail.com",
    number: "08033445566",
    totalAmount: "₦880,000",
    totalTransaction: "90",
    timeStamp: "2 Jun, 2024 7:50",
    status: "Active",
  },
  {
    name: "Grace Alabi",
    date: "23 Aug, 2025",
    contact: "gracealabi@gmail.com",
    number: "08177889900",
    totalAmount: "₦370,000",
    totalTransaction: "45",
    timeStamp: "1 Jun, 2024 6:10",
    status: "Inactive",
  },
  {
    name: "Samuel Okonkwo",
    date: "5 Sep, 2025",
    contact: "samuelokonkwo@gmail.com",
    number: "07099887766",
    totalAmount: "₦500,000",
    totalTransaction: "55",
    timeStamp: "30 May, 2024 4:40",
    status: "Active",
  },
  {
    name: "Ifeoma Uche",
    date: "19 Oct, 2025",
    contact: "ifeomach@gmail.com",
    number: "08044556677",
    totalAmount: "₦280,000",
    totalTransaction: "30",
    timeStamp: "28 May, 2024 2:25",
    status: "Inactive",
  },
];

export const discountProduct = [
  {
    name: "Puma X Davido",
    discountCode: "DAVIDO",
    percent: "50%",
    price: "#31,000",
    dateFrom: "13 June, 2024 4:20PM",
    dateTo: "13 June, 2025 4:20PM",
    status: "Active",
  },
  {
    name: "Nike Summer Blast",
    discountCode: "SUMMER24",
    percent: "30%",
    price: "#45,000",
    dateFrom: "01 July, 2024 10:00AM",
    dateTo: "01 Sept, 2024 11:59PM",
    status: "Pending",
  },
  {
    name: "Adidas All-Stars",
    discountCode: "ALLSTAR",
    percent: "25%",
    price: "#29,999",
    dateFrom: "15 May, 2024 9:00AM",
    dateTo: "15 Aug, 2024 6:00PM",
    status: "Active",
  },
  {
    name: "Reebok Weekend Deal",
    discountCode: "WEEKEND50",
    percent: "50%",
    price: "#20,500",
    dateFrom: "05 Apr, 2024 8:00AM",
    dateTo: "07 Apr, 2024 11:00PM",
    status: "Pending",
  },
  {
    name: "New Balance Spring Drop",
    discountCode: "SPRINGNB",
    percent: "35%",
    price: "#42,000",
    dateFrom: "10 Mar, 2024 12:00PM",
    dateTo: "10 Jun, 2024 12:00PM",
    status: "Active",
  },
  {
    name: "Vans Skate Week",
    discountCode: "SKATE30",
    percent: "30%",
    price: "#27,000",
    dateFrom: "20 Feb, 2024 2:00PM",
    dateTo: "20 May, 2024 2:00PM",
    status: "Pending",
  },
  {
    name: "Fila Retro Fest",
    discountCode: "RETRO10",
    percent: "10%",
    price: "#18,000",
    dateFrom: "01 Jan, 2024 1:00PM",
    dateTo: "01 Jul, 2024 1:00PM",
    status: "Active",
  },
  {
    name: "Converse Color Pop",
    discountCode: "COLORPOP",
    percent: "40%",
    price: "#25,999",
    dateFrom: "08 Mar, 2024 3:00PM",
    dateTo: "08 Sep, 2024 3:00PM",
    status: "Active",
  },
  {
    name: "Under Armour Fit Days",
    discountCode: "FITUA",
    percent: "45%",
    price: "#34,500",
    dateFrom: "22 Apr, 2024 5:00PM",
    dateTo: "22 Jun, 2024 5:00PM",
    status: "Pending",
  },
  {
    name: "Asics Pro Discount",
    discountCode: "ASICS20",
    percent: "20%",
    price: "#37,800",
    dateFrom: "12 Jun, 2024 7:00PM",
    dateTo: "12 Dec, 2024 7:00PM",
    status: "Active",
  },
  {
    name: "Sketchers Chill Offer",
    discountCode: "CHILL15",
    percent: "15%",
    price: "#22,750",
    dateFrom: "25 May, 2024 11:00AM",
    dateTo: "25 Oct, 2024 11:00AM",
    status: "Pending",
  },
];

export const transactionOverviewData = [
  {
    title: "Total Transaction Value",
    value: "$921,345",
    icon: dollar,
    iconColor: "#E17036",
    textColor: "white",
    cardBgColor: "linear-gradient(to bottom, #F16722, #B63D00)",
    percentageValue: 0.5,
    altText: "dollar-sign",
  },

  {
    title: "total orders",
    value: "1,453",
    icon: orders,
    iconColor: "#E17036",
    cardBgColor: "#EFF8FF",
    percentageValue: 0.5,
    borderColor: "#98A2B3",
    altText: "orders-icon",
  },
];

export const allTransaction = [
  {
    phoneNumber: "234782019283992",
    transactionId: "62528",
    transactionDate: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Successful",
  },
  {
    phoneNumber: "2347012345678",
    transactionId: "62529",
    transactionDate: "14 Jun, 2024 9:15AM",
    orderId: "XYZ 12457 K GT",
    customer: "Adaobi Johnson",
    Amount: "#15,500.00",
    paymentStatus: "Successful",
  },
  {
    phoneNumber: "2348098765432",
    transactionId: "62530",
    transactionDate: "15 Jun, 2024 2:40PM",
    orderId: "LMN 33458 Y HP",
    customer: "Chinedu Okoro",
    Amount: "#45,000.00",
    paymentStatus: "Declined",
  },
  {
    phoneNumber: "2347011122233",
    transactionId: "62531",
    transactionDate: "16 Jun, 2024 11:10AM",
    orderId: "QRS 22459 A TR",
    customer: "Fatima Usman",
    Amount: "#12,750.00",
    paymentStatus: "Successful",
  },
  {
    phoneNumber: "2348034567890",
    transactionId: "62532",
    transactionDate: "17 Jun, 2024 4:05PM",
    orderId: "TUV 88460 Z PK",
    customer: "Emeka Nwosu",
    Amount: "#23,300.00",
    paymentStatus: "Declined",
  },
  {
    phoneNumber: "2349091234567",
    transactionId: "62533",
    transactionDate: "18 Jun, 2024 6:30PM",
    orderId: "WXY 99961 B HL",
    customer: "Blessing Adebayo",
    Amount: "#18,000.00",
    paymentStatus: "Successful",
  },
  {
    phoneNumber: "2347067894321",
    transactionId: "62534",
    transactionDate: "19 Jun, 2024 10:50AM",
    orderId: "DEF 11362 M YT",
    customer: "Tunde Ojo",
    Amount: "#31,250.00",
    paymentStatus: "Declined",
  },
  {
    phoneNumber: "2348023456789",
    transactionId: "62535",
    transactionDate: "20 Jun, 2024 8:45AM",
    orderId: "GHI 33463 D VR",
    customer: "Ifeoma Nwachukwu",
    Amount: "#27,000.00",
    paymentStatus: "Successful",
  },
  {
    phoneNumber: "2348123456780",
    transactionId: "62536",
    transactionDate: "21 Jun, 2024 5:20PM",
    orderId: "JKL 44364 C UI",
    customer: "Bashir Danladi",
    Amount: "#40,700.00",
    paymentStatus: "Declined",
  },
  {
    phoneNumber: "2348134567891",
    transactionId: "62537",
    transactionDate: "22 Jun, 2024 12:00PM",
    orderId: "MNO 55365 T WE",
    customer: "Grace Obinna",
    Amount: "#22,950.00",
    paymentStatus: "Successful",
  },
  {
    phoneNumber: "2348145678912",
    transactionId: "62538",
    transactionDate: "23 Jun, 2024 3:35PM",
    orderId: "PQR 66366 G EC",
    customer: "Samuel Edet",
    Amount: "#29,600.00",
    paymentStatus: "Declined",
  },
];

export const allSalesReport = [
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Paid",
  },
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Pending",
  },
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Pending",
  },
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Paid",
  },
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Paid",
  },
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Pending",
  },
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Pending",
  },
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Paid",
  },
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Paid",
  },
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Pending",
  },
  {
    id: "#123456789",
    items: "10",
    timeStamp: "13 Jun, 2024 4:20PM",
    orderId: "ABC 23456 S BL",
    customer: "Greatful Erhis",
    Amount: "#30,000.00",
    paymentStatus: "Paid",
  },
];

export const happyAnalyticsData = [
  {
    title: "Total Redemption",
    value: "540",
    icon: house,
    iconColor: "#E17036",
    textColor: "white",
    cardBgColor: "linear-gradient(to bottom, #F16722, #B63D00)",
    percentageValue: 0.5,
    altText: "dollar-sign",
  },

  {
    title: "Total Amount",
    value: "$921,345",
    icon: dollar,
    iconColor: "#E17036",
    cardBgColor: "#EFF8FF",
    percentageValue: 0.5,
    borderColor: "#98A2B3",
    altText: "orders-icon",
  },
  {
    title: "New Amount",
    value: "$921,345",
    icon: dollar,
    iconColor: "#E17036",
    cardBgColor: "#F4F3FF",
    percentageValue: 0.5,
    borderColor: "#98A2B3",
    altText: "customer-icon",
  },
];

export const giftProductData = [
  {
    title: "total product",
    value: "45",
    icon: house,
    iconColor: "#E17036",
    textColor: "white",
    cardBgColor: "linear-gradient(to bottom, #F16722, #B63D00)",
    percentageValue: 0.5,
    altText: "dollar-sign",
  },

  {
    title: "total categories",
    value: "45",
    icon: orders,
    iconColor: "#E17036",
    cardBgColor: "#EFF8FF",
    percentageValue: 0.5,
    borderColor: "#98A2B3",
    altText: "orders-icon",
  },
  {
    title: "total product value",
    value: "$921,345",
    icon: dollar,
    iconColor: "#E17036",
    cardBgColor: "#EFF8FF",
    percentageValue: 0.5,
    borderColor: "#98A2B3",
    altText: "customer-icon",
  },
  {
    title: "total sales",
    value: "$921,345",
    icon: customer,
    iconColor: "#E17036",
    cardBgColor: "#F4F3FF",
    percentageValue: 0.5,
    borderColor: "#98A2B3",
    altText: "customer-icon",
  },
];

export const giftOrders = [
  {
    name: "Ayodeji Ogunbayo",
    email: "ayodeji@gmail.com",
    date: "13 Jan, 2025",
    recipientName: "Regina King",
    recipientEmail: "regina@gmail.com",
    cardValue: "#31,000",
    status: "Active",
  },
  {
    name: "Tolu Johnson",
    email: "tolu.johnson@gmail.com",
    date: "22 Feb, 2025",
    recipientName: "Samuel Peters",
    recipientEmail: "samuelp@gmail.com",
    cardValue: "#50,000",
    status: "Active",
  },
  {
    name: "Chiamaka Obi",
    email: "chi.obi@gmail.com",
    date: "10 Mar, 2025",
    recipientName: "Amaka Daniels",
    recipientEmail: "amaka.d@gmail.com",
    cardValue: "#15,000",
    status: "Active",
  },
  {
    name: "David Ekene",
    email: "david.ekene@gmail.com",
    date: "5 Apr, 2025",
    recipientName: "Mercy Adebayo",
    recipientEmail: "mercyadebayo@gmail.com",
    cardValue: "#20,000",
    status: "Active",
  },
  {
    name: "Sarah Yusuf",
    email: "sarah.yusuf@gmail.com",
    date: "19 May, 2025",
    recipientName: "Femi Ojo",
    recipientEmail: "femiojo@gmail.com",
    cardValue: "#75,000",
    status: "Active",
  },
  {
    name: "Emmanuel Ogbe",
    email: "emma.ogbe@gmail.com",
    date: "2 Jun, 2025",
    recipientName: "Blessing Okoro",
    recipientEmail: "blessing.okoro@gmail.com",
    cardValue: "#10,000",
    status: "Active",
  },
  {
    name: "Linda Martins",
    email: "lindamartins@gmail.com",
    date: "25 Jul, 2025",
    recipientName: "Victor Moses",
    recipientEmail: "victor.m@gmail.com",
    cardValue: "#40,000",
    status: "Active",
  },
  {
    name: "Kehinde Balogun",
    email: "kehinde.balogun@gmail.com",
    date: "8 Aug, 2025",
    recipientName: "Halima Bello",
    recipientEmail: "halimab@gmail.com",
    cardValue: "#60,000",
    status: "Active",
  },
  {
    name: "Joshua Daniels",
    email: "joshua.d@gmail.com",
    date: "12 Sep, 2025",
    recipientName: "Lilian Obasi",
    recipientEmail: "lilian.obasi@gmail.com",
    cardValue: "#25,000",
    status: "Active",
  },
];

export const storeTargetOrder = [
  {
    name: "Ayodeji Ogunbayo",
    id: "12345768",
    date: "13 Jan, 2025 4:20 PM",
    conversionRate: "23%",
    atv: "#40,000",
  },
  {
    name: "Chinonso Okeke",
    id: "12345769",
    date: "15 Jan, 2025 11:10 AM",
    conversionRate: "30%",
    atv: "#55,000",
  },
  {
    name: "Blessing Adeyemi",
    id: "12345770",
    date: "16 Jan, 2025 2:45 PM",
    conversionRate: "18%",
    atv: "#38,500",
  },
  {
    name: "Tolu Adebayo",
    id: "12345771",
    date: "17 Jan, 2025 9:30 AM",
    conversionRate: "25%",
    atv: "#42,000",
  },
  {
    name: "Zainab Lawal",
    id: "12345772",
    date: "18 Jan, 2025 3:50 PM",
    conversionRate: "27%",
    atv: "#47,000",
  },
  {
    name: "Emeka Obi",
    id: "12345773",
    date: "19 Jan, 2025 1:15 PM",
    conversionRate: "22%",
    atv: "#39,000",
  },
  {
    name: "Linda Uche",
    id: "12345774",
    date: "20 Jan, 2025 10:25 AM",
    conversionRate: "35%",
    atv: "#60,000",
  },
  {
    name: "Segun Adetunji",
    id: "12345775",
    date: "21 Jan, 2025 4:00 PM",
    conversionRate: "20%",
    atv: "#36,000",
  },
  {
    name: "Fatima Bello",
    id: "12345776",
    date: "22 Jan, 2025 12:40 PM",
    conversionRate: "28%",
    atv: "#50,000",
  },
];
