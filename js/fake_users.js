export const INDIAN_COLLEGES = [
    "IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kanpur", "IIT Kharagpur", "BITS Pilani",
    "VIT Vellore", "SRM University", "Manipal Institute of Technology", "Amity University",
    "Delhi University", "JNU", "Anna University", "NIT Trichy", "NIT Warangal",
    "IIIT Hyderabad", "DTU", "NSUT", "Thapar University", "Christ University",
    "Symbiosis Pune", "Mumbai University", "Pune University", "RVCE Bangalore", "PES University"
];

export const INDIAN_CITIES = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata",
    "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
    "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik",
    "Faridabad", "Meerut", "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad",
    "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur"
];

const NAMES = [
    "Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh", "Ayan", "Krishna",
    "Ishaan", "Shaurya", "Atharv", "Rohan", "Aryan", "Kabir", "Ananya", "Diya", "Saanvi",
    "Aadhya", "Pari", "Siya", "Riya", "Myra", "Anvi", "Angel", "Avni", "Vanshika", "Meera",
    "Rahul", "Amit", "Sandeep", "Vikram", "Neha", "Pooja", "Sneha", "Karan", "Rohit", "Priya"
];

const SURNAMES = [
    "Sharma", "Verma", "Gupta", "Malhotra", "Singh", "Kumar", "Patel", "Shah", "Mehta",
    "Jain", "Agarwal", "Reddy", "Nair", "Iyer", "Rao", "Patil", "Deshmukh", "Joshi",
    "Kulkarni", "Chopra", "Khanna", "Saxena", "Tiwari", "Mishra", "Dubey", "Yadav", "Das"
];

const ARCHETYPES = ["Strategic", "Logical", "Social", "Political", "Adaptive"];

// Deterministic Random (simple seeded-like behavior for consistency if needed, 
// strictly we use Math.random here for variety on reload)
export function generateFakeUsers() {
    const users = [];
    const TOTAL_COLLEGE = 257;
    const TOTAL_CITY = 357;

    const getTier = (score) => {
        if (score >= 5000) return "LEGEND";
        if (score >= 3000) return "CHAMPION";
        if (score >= 1500) return "PLATINUM";
        if (score >= 500) return "GOLD";
        return "BRONZE";
    };

    // Generate College Students
    for (let i = 0; i < TOTAL_COLLEGE; i++) {
        const name = `${getRandom(NAMES)} ${getRandom(SURNAMES)}`;
        const sc = Math.floor(Math.random() * 8000) + 500; // Range 500 - 8500
        users.push({
            uid: `fake_col_${i}`,
            username: name,
            college: getRandom(INDIAN_COLLEGES),
            city: getRandom(INDIAN_CITIES), // Students also have home cities
            dominantType: getRandom(ARCHETYPES),
            score: sc,
            tier: getTier(sc),
            isFake: true
        });
    }

    // Generate City Players (Working Professionals / Others)
    for (let i = 0; i < TOTAL_CITY; i++) {
        const name = `${getRandom(NAMES)} ${getRandom(SURNAMES)}`;
        const sc = Math.floor(Math.random() * 9500) + 200; // Range 200 - 9700
        users.push({
            uid: `fake_city_${i}`,
            username: name,
            college: getRandom(INDIAN_COLLEGES), // Now everyone has an Alma Mater
            city: getRandom(INDIAN_CITIES),
            dominantType: getRandom(ARCHETYPES),
            score: sc,
            tier: getTier(sc),
            isFake: true
        });
    }

    // Add some "Legend" tier outliers
    const l1 = 12450;
    users.push({ uid: 'fake_legend_1', username: "Vikram Rathore", college: "IIT Bombay", city: "Mumbai", dominantType: "Strategic", score: l1, tier: getTier(l1), isFake: true });

    const l2 = 11890;
    users.push({ uid: 'fake_legend_2', username: "Zara Khan", college: "BITS Pilani", city: "Bangalore", dominantType: "Logical", score: l2, tier: getTier(l2), isFake: true });

    const l3 = 11200;
    users.push({ uid: 'fake_legend_3', username: "Arjun Reddy", college: "IIIT Hyderabad", city: "Hyderabad", dominantType: "Ruthless", score: l3, tier: getTier(l3), isFake: true });

    return users.sort((a, b) => b.score - a.score);
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
