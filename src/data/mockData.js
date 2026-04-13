export const mockStudents = [
  {
    id: 'S101',
    name: 'Rahul Sharma',
    participation: 35,
    quizScore: 42,
    sentiment: 'Negative',
    engagementScore: 38,
    category: 'Low',
    atRisk: true,
    weeklyHistory: [60, 50, 45, 38],
    sentimentHistory: ['Neutral', 'Neutral', 'Negative', 'Negative'],
    feedback: [
      { date: '2023-10-12', text: 'Struggling with advanced topics.' },
      { date: '2023-10-19', text: 'Missed two assignments this week.' }
    ]
  },
  {
    id: 'S102',
    name: 'Priya Patel',
    participation: 92,
    quizScore: 88,
    sentiment: 'Positive',
    engagementScore: 90,
    category: 'High',
    atRisk: false,
    weeklyHistory: [85, 88, 91, 90],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-10-15', text: 'Excellent participation in group work.' }
    ]
  },
  {
    id: 'S103',
    name: 'Aditya Singh',
    participation: 65,
    quizScore: 70,
    sentiment: 'Neutral',
    engagementScore: 68,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [70, 72, 65, 68],
    sentimentHistory: ['Positive', 'Neutral', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-10-10', text: 'Needs to speak up more in class.' }
    ]
  },
  {
    id: 'S104',
    name: 'Ananya Verma',
    participation: 80,
    quizScore: 85,
    sentiment: 'Positive',
    engagementScore: 82,
    category: 'High',
    atRisk: false,
    weeklyHistory: [78, 80, 85, 82],
    sentimentHistory: ['Neutral', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-10-18', text: 'Great improvement in quizzes.' }
    ]
  },
  {
    id: 'S105',
    name: 'Rohan Gupta',
    participation: 40,
    quizScore: 48,
    sentiment: 'Negative',
    engagementScore: 44,
    category: 'Low',
    atRisk: true,
    weeklyHistory: [55, 48, 45, 44],
    sentimentHistory: ['Neutral', 'Negative', 'Negative', 'Negative'],
    feedback: [
      { date: '2023-10-20', text: 'Consistently distracted during lectures.' }
    ]
  },
  {
    id: 'S106',
    name: 'Meera Reddy',
    participation: 95,
    quizScore: 95,
    sentiment: 'Positive',
    engagementScore: 95,
    category: 'High',
    atRisk: false,
    weeklyHistory: [92, 94, 96, 95],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-10-21', text: 'Top performer this week.' }
    ]
  },
  {
    id: 'S107',
    name: 'Vikram Chawla',
    participation: 60,
    quizScore: 65,
    sentiment: 'Neutral',
    engagementScore: 62,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [65, 60, 68, 62],
    sentimentHistory: ['Neutral', 'Negative', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-10-14', text: 'Consistent, but could engage more deeply.' }
    ]
  },
  {
    id: 'S108',
    name: 'Sneha Joshi',
    participation: 30,
    quizScore: 35,
    sentiment: 'Negative',
    engagementScore: 32,
    category: 'Low',
    atRisk: true,
    weeklyHistory: [40, 38, 35, 32],
    sentimentHistory: ['Negative', 'Negative', 'Negative', 'Negative'],
    feedback: [
      { date: '2023-10-22', text: 'Frequent absences impacting performance.' }
    ]
  },
  {
    id: 'S109',
    name: 'Karan Malhotra',
    participation: 88,
    quizScore: 90,
    sentiment: 'Positive',
    engagementScore: 89,
    category: 'High',
    atRisk: false,
    weeklyHistory: [85, 87, 88, 89],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-10-17', text: 'Very communicative and helpful to peers.' }
    ]
  },
  {
    id: 'S110',
    name: 'Neha Kapoor',
    participation: 75,
    quizScore: 78,
    sentiment: 'Neutral',
    engagementScore: 76,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [70, 75, 78, 76],
    sentimentHistory: ['Neutral', 'Neutral', 'Positive', 'Neutral'],
    feedback: [
      { date: '2023-10-16', text: 'Good grasp of concepts, needs more practice.' }
    ]
  },
  {
    id: 'S111',
    name: 'Arjun Das',
    participation: 45,
    quizScore: 50,
    sentiment: 'Neutral',
    engagementScore: 47,
    category: 'Low',
    atRisk: false,
    weeklyHistory: [50, 48, 45, 47],
    sentimentHistory: ['Neutral', 'Neutral', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-10-18', text: 'Starting to fall behind in reading materials.' }
    ]
  },
  {
    id: 'S112',
    name: 'Tanya Mehra',
    participation: 85,
    quizScore: 82,
    sentiment: 'Positive',
    engagementScore: 83,
    category: 'High',
    atRisk: false,
    weeklyHistory: [80, 82, 85, 83],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-10-19', text: 'Actively participating in all discussions.' }
    ]
  },
  {
    id: 'S113',
    name: 'Amit Kumar',
    participation: 55,
    quizScore: 60,
    sentiment: 'Neutral',
    engagementScore: 57,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [58, 55, 60, 57],
    sentimentHistory: ['Neutral', 'Neutral', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-10-20', text: 'Steady performance, could improve participation.' }
    ]
  },
  {
    id: 'S114',
    name: 'Pooja Jain',
    participation: 90,
    quizScore: 92,
    sentiment: 'Positive',
    engagementScore: 91,
    category: 'High',
    atRisk: false,
    weeklyHistory: [88, 90, 92, 91],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-10-21', text: 'Outstanding work in recent assignments.' }
    ]
  },
  {
    id: 'S115',
    name: 'Rajesh Tiwari',
    participation: 25,
    quizScore: 30,
    sentiment: 'Negative',
    engagementScore: 27,
    category: 'Low',
    atRisk: true,
    weeklyHistory: [35, 30, 25, 27],
    sentimentHistory: ['Negative', 'Negative', 'Negative', 'Negative'],
    feedback: [
      { date: '2023-10-22', text: 'Needs significant improvement in attendance.' }
    ]
  },
  {
    id: 'S116',
    name: 'Kavita Rao',
    participation: 78,
    quizScore: 80,
    sentiment: 'Positive',
    engagementScore: 79,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [75, 78, 80, 79],
    sentimentHistory: ['Neutral', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-10-23', text: 'Good progress in understanding topics.' }
    ]
  },
  {
    id: 'S117',
    name: 'Suresh Nair',
    participation: 68,
    quizScore: 72,
    sentiment: 'Neutral',
    engagementScore: 70,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [70, 68, 72, 70],
    sentimentHistory: ['Neutral', 'Neutral', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-10-24', text: 'Consistent but needs more initiative.' }
    ]
  },
  {
    id: 'S118',
    name: 'Divya Sharma',
    participation: 95,
    quizScore: 98,
    sentiment: 'Positive',
    engagementScore: 96,
    category: 'High',
    atRisk: false,
    weeklyHistory: [93, 95, 98, 96],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-10-25', text: 'Exceptional dedication and performance.' }
    ]
  },
  {
    id: 'S119',
    name: 'Manoj Yadav',
    participation: 42,
    quizScore: 45,
    sentiment: 'Negative',
    engagementScore: 43,
    category: 'Low',
    atRisk: true,
    weeklyHistory: [50, 45, 42, 43],
    sentimentHistory: ['Neutral', 'Negative', 'Negative', 'Negative'],
    feedback: [
      { date: '2023-10-26', text: 'Struggling with basic concepts.' }
    ]
  },
  {
    id: 'S120',
    name: 'Anjali Gupta',
    participation: 82,
    quizScore: 85,
    sentiment: 'Positive',
    engagementScore: 83,
    category: 'High',
    atRisk: false,
    weeklyHistory: [80, 82, 85, 83],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-10-27', text: 'Very engaged in online discussions.' }
    ]
  },
  {
    id: 'S121',
    name: 'Vivek Singh',
    participation: 50,
    quizScore: 55,
    sentiment: 'Neutral',
    engagementScore: 52,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [55, 50, 55, 52],
    sentimentHistory: ['Neutral', 'Neutral', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-10-28', text: 'Average performance, room for improvement.' }
    ]
  },
  {
    id: 'S122',
    name: 'Ritu Agarwal',
    participation: 88,
    quizScore: 90,
    sentiment: 'Positive',
    engagementScore: 89,
    category: 'High',
    atRisk: false,
    weeklyHistory: [85, 88, 90, 89],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-10-29', text: 'Leading group projects effectively.' }
    ]
  },
  {
    id: 'S123',
    name: 'Naveen Kumar',
    participation: 35,
    quizScore: 40,
    sentiment: 'Negative',
    engagementScore: 37,
    category: 'Low',
    atRisk: true,
    weeklyHistory: [45, 40, 35, 37],
    sentimentHistory: ['Negative', 'Negative', 'Negative', 'Negative'],
    feedback: [
      { date: '2023-10-30', text: 'Frequent disengagement noted.' }
    ]
  },
  {
    id: 'S124',
    name: 'Swati Mishra',
    participation: 70,
    quizScore: 75,
    sentiment: 'Neutral',
    engagementScore: 72,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [68, 70, 75, 72],
    sentimentHistory: ['Neutral', 'Neutral', 'Positive', 'Neutral'],
    feedback: [
      { date: '2023-10-31', text: 'Good effort in quizzes.' }
    ]
  },
  {
    id: 'S125',
    name: 'Arun Patel',
    participation: 92,
    quizScore: 95,
    sentiment: 'Positive',
    engagementScore: 93,
    category: 'High',
    atRisk: false,
    weeklyHistory: [90, 92, 95, 93],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-11-01', text: 'Top of the class this week.' }
    ]
  },
  {
    id: 'S126',
    name: 'Megha Saxena',
    participation: 48,
    quizScore: 52,
    sentiment: 'Neutral',
    engagementScore: 50,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [52, 48, 52, 50],
    sentimentHistory: ['Neutral', 'Neutral', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-11-02', text: 'Needs to catch up on missed classes.' }
    ]
  },
  {
    id: 'S127',
    name: 'Rakesh Verma',
    participation: 28,
    quizScore: 32,
    sentiment: 'Negative',
    engagementScore: 30,
    category: 'Low',
    atRisk: true,
    weeklyHistory: [38, 32, 28, 30],
    sentimentHistory: ['Negative', 'Negative', 'Negative', 'Negative'],
    feedback: [
      { date: '2023-11-03', text: 'Significant drop in engagement.' }
    ]
  },
  {
    id: 'S128',
    name: 'Priyanka Das',
    participation: 85,
    quizScore: 87,
    sentiment: 'Positive',
    engagementScore: 86,
    category: 'High',
    atRisk: false,
    weeklyHistory: [82, 85, 87, 86],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-11-04', text: 'Excellent teamwork skills.' }
    ]
  },
  {
    id: 'S129',
    name: 'Sanjay Joshi',
    participation: 62,
    quizScore: 68,
    sentiment: 'Neutral',
    engagementScore: 65,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [65, 62, 68, 65],
    sentimentHistory: ['Neutral', 'Neutral', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-11-05', text: 'Solid performance overall.' }
    ]
  },
  {
    id: 'S130',
    name: 'Kiran Reddy',
    participation: 95,
    quizScore: 97,
    sentiment: 'Positive',
    engagementScore: 96,
    category: 'High',
    atRisk: false,
    weeklyHistory: [93, 95, 97, 96],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-11-06', text: 'Inspiring others with her enthusiasm.' }
    ]
  },
  {
    id: 'S131',
    name: 'Alok Chawla',
    participation: 40,
    quizScore: 45,
    sentiment: 'Negative',
    engagementScore: 42,
    category: 'Low',
    atRisk: true,
    weeklyHistory: [48, 45, 40, 42],
    sentimentHistory: ['Neutral', 'Negative', 'Negative', 'Negative'],
    feedback: [
      { date: '2023-11-07', text: 'Needs extra help with assignments.' }
    ]
  },
  {
    id: 'S132',
    name: 'Nisha Kapoor',
    participation: 78,
    quizScore: 80,
    sentiment: 'Positive',
    engagementScore: 79,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [75, 78, 80, 79],
    sentimentHistory: ['Neutral', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-11-08', text: 'Improving steadily.' }
    ]
  },
  {
    id: 'S133',
    name: 'Ravi Singh',
    participation: 55,
    quizScore: 60,
    sentiment: 'Neutral',
    engagementScore: 57,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [58, 55, 60, 57],
    sentimentHistory: ['Neutral', 'Neutral', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-11-09', text: 'Good potential, needs focus.' }
    ]
  },
  {
    id: 'S134',
    name: 'Anita Mehra',
    participation: 90,
    quizScore: 92,
    sentiment: 'Positive',
    engagementScore: 91,
    category: 'High',
    atRisk: false,
    weeklyHistory: [88, 90, 92, 91],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-11-10', text: 'Outstanding contributions.' }
    ]
  },
  {
    id: 'S135',
    name: 'Deepak Kumar',
    participation: 32,
    quizScore: 38,
    sentiment: 'Negative',
    engagementScore: 35,
    category: 'Low',
    atRisk: true,
    weeklyHistory: [42, 38, 32, 35],
    sentimentHistory: ['Negative', 'Negative', 'Negative', 'Negative'],
    feedback: [
      { date: '2023-11-11', text: 'Requires immediate attention.' }
    ]
  },
  {
    id: 'S136',
    name: 'Shreya Jain',
    participation: 75,
    quizScore: 78,
    sentiment: 'Neutral',
    engagementScore: 76,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [72, 75, 78, 76],
    sentimentHistory: ['Neutral', 'Neutral', 'Positive', 'Neutral'],
    feedback: [
      { date: '2023-11-12', text: 'Consistent progress.' }
    ]
  },
  {
    id: 'S137',
    name: 'Vijay Tiwari',
    participation: 85,
    quizScore: 88,
    sentiment: 'Positive',
    engagementScore: 86,
    category: 'High',
    atRisk: false,
    weeklyHistory: [82, 85, 88, 86],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-11-13', text: 'Very proactive in learning.' }
    ]
  },
  {
    id: 'S138',
    name: 'Poonam Rao',
    participation: 45,
    quizScore: 50,
    sentiment: 'Neutral',
    engagementScore: 47,
    category: 'Low',
    atRisk: false,
    weeklyHistory: [50, 48, 45, 47],
    sentimentHistory: ['Neutral', 'Neutral', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-11-14', text: 'Needs encouragement to participate more.' }
    ]
  },
  {
    id: 'S139',
    name: 'Harish Nair',
    participation: 68,
    quizScore: 72,
    sentiment: 'Neutral',
    engagementScore: 70,
    category: 'Medium',
    atRisk: false,
    weeklyHistory: [70, 68, 72, 70],
    sentimentHistory: ['Neutral', 'Neutral', 'Neutral', 'Neutral'],
    feedback: [
      { date: '2023-11-15', text: 'Reliable student.' }
    ]
  },
  {
    id: 'S140',
    name: 'Sunita Sharma',
    participation: 92,
    quizScore: 95,
    sentiment: 'Positive',
    engagementScore: 93,
    category: 'High',
    atRisk: false,
    weeklyHistory: [90, 92, 95, 93],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-11-16', text: 'Role model for peers.' }
    ]
  },
  {
    id: 'S141',
    name: 'Raj Kumar',
    participation: 38,
    quizScore: 42,
    sentiment: 'Negative',
    engagementScore: 40,
    category: 'Low',
    atRisk: true,
    weeklyHistory: [45, 42, 38, 40],
    sentimentHistory: ['Negative', 'Negative', 'Negative', 'Negative'],
    feedback: [
      { date: '2023-11-17', text: 'Struggling to keep up.' }
    ]
  },
  {
    id: 'S142',
    name: 'Maya Gupta',
    participation: 80,
    quizScore: 83,
    sentiment: 'Positive',
    engagementScore: 81,
    category: 'High',
    atRisk: false,
    weeklyHistory: [78, 80, 83, 81],
    sentimentHistory: ['Positive', 'Positive', 'Positive', 'Positive'],
    feedback: [
      { date: '2023-11-18', text: 'Great analytical skills.' }
    ]
  }
];

export const classAverageTrends = [
  { week: 'Week 1', average: 72 },
  { week: 'Week 2', average: 75 },
  { week: 'Week 3', average: 71 },
  { week: 'Week 4', average: 73 }
];

export const sentimentDistribution = [
  { name: 'Positive', value: 35 },
  { name: 'Neutral', value: 45 },
  { name: 'Negative', value: 20 }
];

export const categoryDistribution = [
  { name: 'High', value: 45 },
  { name: 'Medium', value: 30 },
  { name: 'Low', value: 25 }
];
