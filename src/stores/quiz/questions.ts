import { answersList } from './answers';
import type { Question, Questions } from './types';

function replaceName(q: string, name: string) {
  return q.replace('>name<', name);
}

export const questionsList = [
  'Which locations do you want to be notified about when your >name< arrives?',
  'What is your primary reason for wanting to track >name<’s location?',
  'How often do you feel the need to check your >name<’s location?',
  'How frequently do you want to receive location updates?',
  'What types of locations do you consider inappropriate for your >name<?',
  'How many people do you want to track with Locate 360',
  'Which feature are most essential for ensuring the safety of >name<',
];

export const initialQuestion: Question = {
  multiple: false,
  id: 'who',
  text: 'Who do want to track first?',
  answers: [
    answersList.partner,
    answersList.kid,
    answersList.friend,
    answersList.sibling,
    answersList.grandparent,
    answersList.other,
  ],
}

export const questions: Questions = {
  partner: [
    {
      id: 'notifiedLocations',
      multiple: true,
      text: replaceName(questionsList[0], 'Partner'),
      answers: [
        answersList.work,
        answersList.home,
        answersList.friends,
        answersList.restaurants,
        answersList.unknownLocation,
        answersList.other,
      ],
    },
    {
      id: 'reason',
      multiple: false,
      text: replaceName(questionsList[1], 'Partner'),
      answers: [
        answersList.partnerHonesty,
        answersList.safety,
        answersList.connection,
        answersList.other,
      ],
    },
    {
      id: 'checkFrequency',
      multiple: false,
      text: replaceName(questionsList[2], 'Partner'),
      answers: [
        answersList.everyHour,
        answersList.everyDay,
        answersList.onceAWeek,
        answersList.rarely,
        answersList.never,
      ],
    },
    {
      id: 'updateFrequency',
      multiple: false,
      text: replaceName(questionsList[3], 'Partner'),
      answers: [
        answersList.realTimeUpdates,
        answersList.fiveMin,
        answersList.fifteenMin,
        answersList.oneHour,
        answersList.other,
      ],
    },
    {
      id: 'inappropriateLocations',
      multiple: true,
      text: replaceName(questionsList[4], 'Partner'),
      answers: [
        answersList.casino,
        answersList.nightclub,
        answersList.hotel,
        answersList.unknownLocation,
        answersList.exHouseWork,
        answersList.other,
      ],
    },
    {
      id: 'trackingPeoples',
      multiple: false,
      text: replaceName(questionsList[5], 'Partner'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      text: replaceName(questionsList[6], 'Partner'),
      answers: [
        answersList.realTimeTracking,
        answersList.placeAlerts,
        answersList.sosButton,
        answersList.all,
        answersList.other,
      ],
    },
  ],
  kid: [
    {
      id: 'notifiedLocations',
      multiple: true,
      text: replaceName(questionsList[0], 'Kid'),
      answers: [
        answersList.home,
        answersList.school,
        answersList.friends,
        answersList.hobby,
        answersList.other,
      ],
    },
    {
      id: 'reason',
      multiple: false,
      text: replaceName(questionsList[1], 'Kid'),
      answers: [answersList.safety, answersList.connection, answersList.protect, answersList.other],
    },
    {
      id: 'checkFrequency',
      multiple: false,
      text: replaceName(questionsList[2], 'Kid'),
      answers: [
        answersList.everyHour,
        answersList.everyDay,
        answersList.onceAWeek,
        answersList.rarely,
        answersList.never,
      ],
    },
    {
      id: 'updateFrequency',
      multiple: false,
      text: replaceName(questionsList[3], 'Kid'),
      answers: [
        answersList.realTimeUpdates,
        answersList.fiveMin,
        answersList.fifteenMin,
        answersList.oneHour,
        answersList.other,
      ],
    },
    {
      id: 'inappropriateLocations',
      multiple: true,
      text: replaceName(questionsList[4], 'Kid'),
      answers: [
        answersList.unknownLocation,
        answersList.friendsHome,
        answersList.shopingMall,
        answersList.parkPlaygrounds,
        answersList.publicAreas,
        answersList.other,
      ],
    },
    {
      id: 'trackingPeoples',
      multiple: false,
      text: replaceName(questionsList[5], 'Kid'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      text: replaceName(questionsList[6], 'Kid'),
      answers: [
        answersList.realTimeTracking,
        answersList.placeAlerts,
        answersList.sosButton,
        answersList.all,
        answersList.other,
      ],
    },
  ],
  friend: [
    {
      id: 'notifiedLocations',
      multiple: true,
      text: replaceName(questionsList[0], 'Friend'),
      answers: [
        answersList.home,
        answersList.school,
        answersList.work,
        answersList.restaurants,
        answersList.other,
      ],
    },
    {
      id: 'reason',
      multiple: false,
      text: replaceName(questionsList[1], 'Friend'),
      answers: [
        answersList.safety,
        answersList.connection,
        answersList.matchFriendLocation,
        answersList.other,
      ],
    },
    {
      id: 'checkFrequency',
      multiple: false,
      text: replaceName(questionsList[2], 'Friend'),
      answers: [
        answersList.everyHour,
        answersList.everyDay,
        answersList.onceAWeek,
        answersList.rarely,
        answersList.never,
      ],
    },
    {
      id: 'updateFrequency',
      multiple: false,
      text: replaceName(questionsList[3], 'Friend'),
      answers: [
        answersList.realTimeUpdates,
        answersList.fiveMin,
        answersList.fifteenMin,
        answersList.oneHour,
        answersList.other,
      ],
    },
    {
      id: 'inappropriateLocations',
      multiple: true,
      text: replaceName(questionsList[4], 'Friend'),
      answers: [
        answersList.crime,
        answersList.unknownLocation,
        answersList.parkPlaygrounds,
        answersList.other,
      ],
    },
    {
      id: 'trackingPeoples',
      multiple: false,
      text: replaceName(questionsList[5], 'Friend'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      text: replaceName(questionsList[6], 'Friend'),
      answers: [
        answersList.realTimeTracking,
        answersList.placeAlerts,
        answersList.sosButton,
        answersList.all,
        answersList.other,
      ],
    },
  ],
  sibling: [
    {
      id: 'notifiedLocations',
      multiple: true,
      text: replaceName(questionsList[0], 'Sibling'),
      answers: [
        answersList.home,
        answersList.school,
        answersList.work,
        answersList.restaurants,
        answersList.other,
      ],
    },
    {
      id: 'reason',
      multiple: false,
      text: replaceName(questionsList[1], 'Sibling'),
      answers: [answersList.safety, answersList.connection, answersList.other],
    },
    {
      id: 'checkFrequency',
      multiple: false,
      text: replaceName(questionsList[2], 'Sibling'),
      answers: [
        answersList.everyHour,
        answersList.everyDay,
        answersList.onceAWeek,
        answersList.rarely,
        answersList.never,
      ],
    },
    {
      id: 'updateFrequency',
      multiple: false,
      text: replaceName(questionsList[3], 'Sibling'),
      answers: [
        answersList.realTimeUpdates,
        answersList.fiveMin,
        answersList.fifteenMin,
        answersList.oneHour,
        answersList.other,
      ],
    },
    {
      id: 'inappropriateLocations',
      multiple: true,
      text: replaceName(questionsList[4], 'Sibling'),
      answers: [
        answersList.crime,
        answersList.unknownLocation,
        answersList.parkPlaygrounds,
        answersList.other,
      ],
    },
    {
      id: 'trackingPeoples',
      multiple: false,
      text: replaceName(questionsList[5], 'Sibling'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      text: replaceName(questionsList[6], 'Sibling'),
      answers: [
        answersList.realTimeTracking,
        answersList.placeAlerts,
        answersList.sosButton,
        answersList.all,
        answersList.other,
      ],
    },
  ],
  grandparent: [
    {
      id: 'notifiedLocations',
      multiple: true,
      text: replaceName(questionsList[0], 'Grandparent'),
      answers: [answersList.home, answersList.work, answersList.medical, answersList.other],
    },
    {
      id: 'reason',
      multiple: false,
      text: replaceName(questionsList[1], 'Grandparent'),
      answers: [
        answersList.safety,
        answersList.connection,
        answersList.gettingLost,
        answersList.other,
      ],
    },
    {
      id: 'checkFrequency',
      multiple: false,
      text: replaceName(questionsList[2], 'Grandparent'),
      answers: [
        answersList.everyHour,
        answersList.everyDay,
        answersList.onceAWeek,
        answersList.rarely,
        answersList.never,
      ],
    },
    {
      id: 'updateFrequency',
      multiple: false,
      text: replaceName(questionsList[3], 'Grandparent'),
      answers: [
        answersList.realTimeUpdates,
        answersList.fiveMin,
        answersList.fifteenMin,
        answersList.oneHour,
        answersList.other,
      ],
    },
    {
      id: 'inappropriateLocations',
      multiple: true,
      text: replaceName(questionsList[4], 'Grandparent'),
      answers: [
        answersList.distantPlaces,
        answersList.highRiskInjury,
        answersList.easyLost,
        answersList.unknownLocation,
        answersList.other,
      ],
    },
    {
      id: 'trackingPeoples',
      multiple: false,
      text: replaceName(questionsList[5], 'Grandparent'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      text: replaceName(questionsList[6], 'Grandparent'),
      answers: [
        answersList.realTimeTracking,
        answersList.placeAlerts,
        answersList.sosButton,
        answersList.all,
        answersList.other,
      ],
    },
  ],
  other: [
    {
      id: 'notifiedLocations',
      multiple: true,
      text: replaceName(questionsList[0], 'Other'),
      answers: [
        answersList.home,
        answersList.school,
        answersList.friends,
        answersList.hobby,
        answersList.work,
        answersList.restaurants,
        answersList.unknownLocation,
        answersList.medical,
        answersList.other,
      ],
    },
    {
      id: 'reason',
      multiple: false,
      text: replaceName(questionsList[1], 'Other'),
      answers: [
        answersList.safety,
        answersList.connection,
        answersList.gettingLost,
        answersList.protect,
        answersList.partnerHonesty,
        answersList.matchFriendLocation,
        answersList.other,
      ],
    },
    {
      id: 'checkFrequency',
      multiple: false,
      text: replaceName(questionsList[2], 'Other'),
      answers: [
        answersList.everyHour,
        answersList.everyDay,
        answersList.onceAWeek,
        answersList.rarely,
        answersList.never,
      ],
    },
    {
      id: 'updateFrequency',
      multiple: false,
      text: replaceName(questionsList[3], 'Other'),
      answers: [
        answersList.realTimeUpdates,
        answersList.fiveMin,
        answersList.fifteenMin,
        answersList.oneHour,
        answersList.other,
      ],
    },
    {
      id: 'inappropriateLocations',
      multiple: true,
      text: replaceName(questionsList[4], 'Other'),
      answers: [
        answersList.distantPlaces,
        answersList.highRiskInjury,
        answersList.unknownLocation,
        answersList.friendsHome,
        answersList.shopingMall,
        answersList.parkPlaygrounds,
        answersList.publicAreas,
        answersList.easyLost,
        answersList.casino,
        answersList.nightclub,
        answersList.hotel,
        answersList.exHouseWork,
        answersList.unknownLocation,
        answersList.crime,
        answersList.other,
      ],
    },
    {
      id: 'trackingPeoples',
      multiple: false,
      text: replaceName(questionsList[5], 'Other'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      text: replaceName(questionsList[6], 'Other'),
      answers: [
        answersList.realTimeTracking,
        answersList.placeAlerts,
        answersList.sosButton,
        answersList.all,
        answersList.other,
      ],
    },
  ],
};
