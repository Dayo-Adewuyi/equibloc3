// gigs.tsx
"use client";
interface Gig {
    id: string;
    companyLogo: string;
    jobTitle: string;
    companyName: string;
    duration: string;
    rate: string;
    type: string;
    category: string;
}

const gigsData: Gig[] = [
    {
        id: "1",
        companyLogo: "	https://www.openzeppelin.com/hubfs/iso-openzeppelin.svg",
        jobTitle: "Web3.js Developer",
        companyName: "Amazon",
        duration: "3+ months",
        rate: "$260/Day",
        type: "Full time",
        category: "Development",
    },
    {
        id: "2",
        companyLogo: "	https://www.openzeppelin.com/hubfs/iso-openzeppelin.svg",
        jobTitle: "Smart Contract Developer",
        companyName: "Google",
        duration: "3-6 months",
        rate: "$250/Day",
        type: "Part time",
        category: "Blockchain",
    },
    {
        id: "3",
        companyLogo: "	https://www.openzeppelin.com/hubfs/iso-openzeppelin.svg",
        jobTitle: "Blockchain Engineer",
        companyName: "Facebook",
        duration: "1-3 months",
        rate: "$200/Day",
        type: "Contract",
        category: "Development",
    },
    {
        id: "4",
        companyLogo: "	https://www.openzeppelin.com/hubfs/iso-openzeppelin.svg",
        jobTitle: "Designer",
        companyName: "Celo",
        duration: "2-4 weeks",
        rate: "$150/Day",
        type: "Part-Time",
        category: "Ui/Ux",
    },
    {
        id: "5",
        companyLogo: "/assets/the-graph.png",
        jobTitle: "Designer",
        companyName: "Celo",
        duration: "2-4 weeks",
        rate: "$150/Day",
        type: "Part-Time",
        category: "Ui/Ux",
    },
    {
        id: "6",
        companyLogo: "/assets/the-graph.png",
        jobTitle: "Designer",
        companyName: "Celo",
        duration: "2-4 weeks",
        rate: "$150/Day",
        type: "Part-Time",
        category: "Ui/Ux",
    },
    {
        id: "7",
        companyLogo: "/assets/the-graph.png",
        jobTitle: "Designer",
        companyName: "Celo",
        duration: "2-4 weeks",
        rate: "$150/Day",
        type: "Part-Time",
        category: "Ui/Ux",
    },
    {
        id: "8",
        companyLogo: "/assets/the-graph.png",
        jobTitle: "Designer",
        companyName: "Celo",
        duration: "2-4 weeks",
        rate: "$150/Day",
        type: "Part-Time",
        category: "Ui/Ux",
    },
    {
        id: "9",
        companyLogo: "/assets/optimism.png",
        jobTitle: "Designer",
        companyName: "Celo",
        duration: "2-4 weeks",
        rate: "$150/Day",
        type: "Part-Time",
        category: "Ui/Ux",
    },
    {
        id: "10",
        companyLogo: "/assets/optimism.png",
        jobTitle: "Designer",
        companyName: "Celo",
        duration: "2-4 weeks",
        rate: "$150/Day",
        type: "Part-Time",
        category: "Ui/Ux",
    },
    {
        id: "11",
        companyLogo: "/assets/optimism.png",
        jobTitle: "Designer",
        companyName: "Celo",
        duration: "2-4 weeks",
        rate: "$150/Day",
        type: "Part-Time",
        category: "Ui/Ux",
    },
    {
        id: "12",
        companyLogo: "/assets/esp-logo.png",
        jobTitle: "Designer",
        companyName: "Celo",
        duration: "2-4 weeks",
        rate: "$150/Day",
        type: "Part-Time",
        category: "Ui/Ux",
    },
];

export default gigsData;