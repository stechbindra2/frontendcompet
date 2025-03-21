export const electionData = {
  summary: {
    totalSeats: 543,
    seatsReported: 412,
    leadingParties: [
      { party: 'BJP', seats: 210, change: '+12' },
      { party: 'INC', seats: 98, change: '-6' },
      { party: 'AAP', seats: 24, change: '+18' },
      { party: 'TMC', seats: 22, change: '-2' },
      { party: 'SP', seats: 18, change: '+3' },
      { party: 'Others', seats: 40, change: '-25' }
    ],
    turnout: 68.5,
    lastUpdated: '2024-05-24T14:30:00Z'
  },
  states: [
    {
      name: 'Uttar Pradesh',
      completed: 75,
      results: [
        { party: 'BJP', votes: 15800000, seats: 45 },
        { party: 'SP', votes: 9200000, seats: 18 },
        { party: 'INC', votes: 6700000, seats: 8 },
        { party: 'BSP', votes: 3400000, seats: 0 }
      ]
    },
    {
      name: 'Maharashtra',
      completed: 82,
      results: [
        { party: 'BJP', votes: 12500000, seats: 28 },
        { party: 'INC', votes: 9800000, seats: 12 },
        { party: 'NCP', votes: 4600000, seats: 6 },
        { party: 'SS', votes: 5100000, seats: 7 }
      ]
    },
    {
      name: 'West Bengal',
      completed: 64,
      results: [
        { party: 'TMC', votes: 11200000, seats: 22 },
        { party: 'BJP', votes: 9800000, seats: 18 },
        { party: 'INC', votes: 2700000, seats: 2 },
        { party: 'CPI(M)', votes: 1900000, seats: 0 }
      ]
    },
    {
      name: 'Tamil Nadu',
      completed: 90,
      results: [
        { party: 'DMK', votes: 8900000, seats: 18 },
        { party: 'AIADMK', votes: 7200000, seats: 14 },
        { party: 'INC', votes: 3100000, seats: 6 },
        { party: 'BJP', votes: 1800000, seats: 0 }
      ]
    },
    {
      name: 'Kerala',
      completed: 95,
      results: [
        { party: 'INC', votes: 5600000, seats: 15 },
        { party: 'CPI(M)', votes: 4900000, seats: 3 },
        { party: 'BJP', votes: 2100000, seats: 0 },
        { party: 'IUML', votes: 1800000, seats: 2 }
      ]
    },
    {
      name: 'Delhi',
      completed: 100,
      results: [
        { party: 'AAP', votes: 4200000, seats: 5 },
        { party: 'BJP', votes: 3800000, seats: 2 },
        { party: 'INC', votes: 1600000, seats: 0 }
      ]
    }
  ],
  trends: {
    timeline: [
      { time: '8:00 AM', BJP: 120, INC: 60, AAP: 15, TMC: 18, SP: 12, Others: 25 },
      { time: '10:00 AM', BJP: 145, INC: 72, AAP: 18, TMC: 20, SP: 15, Others: 30 },
      { time: '12:00 PM', BJP: 168, INC: 82, AAP: 22, TMC: 21, SP: 16, Others: 33 },
      { time: '2:00 PM', BJP: 190, INC: 90, AAP: 23, TMC: 22, SP: 17, Others: 36 },
      { time: '4:00 PM', BJP: 210, INC: 98, AAP: 24, TMC: 22, SP: 18, Others: 40 }
    ],
    voteShare: {
      BJP: 37.8,
      INC: 22.5,
      AAP: 8.6,
      TMC: 6.2,
      SP: 4.8,
      Others: 20.1
    }
  }
};
