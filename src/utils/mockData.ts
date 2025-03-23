import dollar from "../../src/assets/images/dollarSign.png";
import orders from "../../src/assets/images/orders.png";
import customer from "../../src/assets/images/customers.png";
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
