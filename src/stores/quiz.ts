import { defineStore } from 'pinia';
import { markRaw } from 'vue';
import BagsIcon from '../components/icons/BagsIcon.vue';
import BandageIcon from '../components/icons/BandageIcon.vue';
import BellIcon from '../components/icons/BellIcon.vue';
import BuildingIcon from '../components/icons/BuildingIcon.vue';
import CalendarEveryDayIcon from '../components/icons/CalendarEveryDayIcon.vue';
import CalendarIcon from '../components/icons/CalendarIcon.vue';
import CalendarOnceAWeekIcon from '../components/icons/CalendarOnceAWeekIcon.vue';
import CalendarRandomDayIcon from '../components/icons/CalendarRandomDayIcon.vue';
import CamsIcon from '../components/icons/CamsIcon.vue';
import CasinoIcon from '../components/icons/CasinoIcon.vue';
import CheckmarkIcon from '../components/icons/CheckmarkIcon.vue';
import ClockFifteenMinutesIcon from '../components/icons/ClockFifteenMinutesIcon.vue';
import ClockFiveMinutesIcon from '../components/icons/ClockFiveMinutesIcon.vue';
import ClockIcon from '../components/icons/ClockIcon.vue';
import ClockSixtyMinutesIcon from '../components/icons/ClockSixtyMinutesIcon.vue';
import CommunicationIcon from '../components/icons/CommunicationIcon.vue';
import CriminalIcon from '../components/icons/CriminalIcon.vue';
import FlasherIcon from '../components/icons/FlasherIcon.vue';
import FriendsIcon from '../components/icons/FriendsIcon.vue';
import GrandparentIcon from '../components/icons/GrandparentIcon.vue';
import HeartbreakIcon from '../components/icons/HeartbreakIcon.vue';
import HobbyIcon from '../components/icons/HobbyIcon.vue';
import HomeIcon from '../components/icons/HomeIcon.vue';
import HotelIcon from '../components/icons/HotelIcon.vue';
import KidIcon from '../components/icons/KidIcon.vue';
import LocationIcon from '../components/icons/LocationIcon.vue';
import MagnifierIcon from '../components/icons/MagnifierIcon.vue';
import MapIcon from '../components/icons/MapIcon.vue';
import MedicalIcon from '../components/icons/MedicalIcon.vue';
import OtherIcon from '../components/icons/OtherIcon.vue';
import ParkIcon from '../components/icons/ParkIcon.vue';
import PartnerIcon from '../components/icons/PartnerIcon.vue';
import ProtectionIcon from '../components/icons/ProtectionIcon.vue';
import RefreshIcon from '../components/icons/RefreshIcon.vue';
import RestaurantsIcon from '../components/icons/RestaurantsIcon.vue';
import RouteIcon from '../components/icons/RouteIcon.vue';
import ShoolIcon from '../components/icons/ShoolIcon.vue';
import SiblingIcon from '../components/icons/SiblingIcon.vue';
import WarningIcon from '../components/icons/WarningIcon.vue';
import WorkIcon from '../components/icons/WorkIcon.vue';
import OneTwoIcon from '../components/icons/OneTwoIcon.vue';
import ThreeFiveIcon from '../components/icons/ThreeFiveIcon.vue';
import SixTenIcon from '../components/icons/SixTenIcon.vue';
import OverTenIcon from '../components/icons/OverTenIcon.vue';

function replaceName(q: string, name: string) {
  return q.replace('>name<', name);
}

const questionsList = [
  'Which locations do you want to be notified about when your >name< arrives?',
  'What is your primary reason for wanting to track >name<’s location?',
  'How often do you feel the need to check your >name<’s location?',
  'How frequently do you want to receive location updates?',
  'What types of locations do you consider inappropriate for your >name<?',
  'How many people do you want to track with Locate 360',
  'Which feature are most essential for ensuring the safety of >name<',
];

const answersList = {
  home: {
    text: 'Home',
    icon: markRaw(HomeIcon),
  },
  school: {
    text: 'School',
    icon: markRaw(ShoolIcon),
  },
  friends: {
    text: 'Friends',
    icon: markRaw(CamsIcon),
  },
  hobby: {
    text: 'Hobby classes',
    icon: markRaw(HobbyIcon),
  },
  other: {
    text: 'Other',
    icon: markRaw(OtherIcon),
  },
  safety: {
    text: 'Safety concerns',
    icon: markRaw(WarningIcon),
  },
  connection: {
    text: 'I want to stay connected',
    icon: markRaw(CommunicationIcon),
  },
  protect: {
    text: 'Kip kid away from bad places and companies',
    icon: markRaw(ProtectionIcon),
  },
  realTimeUpdates: {
    text: 'Real-time updates',
    icon: markRaw(RefreshIcon),
  },
  fiveMin: {
    text: 'Every 5 minutes',
    icon: markRaw(ClockFiveMinutesIcon),
  },
  fifteenMin: {
    text: 'Every 15 minutes',
    icon: markRaw(ClockFifteenMinutesIcon),
  },
  oneHour: {
    text: 'Every hour',
    icon: markRaw(ClockSixtyMinutesIcon),
  },
  everyHour: {
    text: 'Every hour',
    icon: markRaw(ClockIcon),
  },
  everyDay: {
    text: 'Every day',
    icon: markRaw(CalendarEveryDayIcon),
  },
  onceAWeek: {
    text: 'Once a week',
    icon: markRaw(CalendarOnceAWeekIcon),
  },
  rarely: {
    text: 'Rarely',
    icon: markRaw(CalendarRandomDayIcon),
  },
  never: {
    text: 'Never',
    icon: markRaw(CalendarIcon),
  },
  unknownLocation: {
    text: 'Unknown locations',
    icon: markRaw(LocationIcon),
  },
  friendsHome: {
    text: 'Friend’s home',
    icon: markRaw(HomeIcon),
  },
  shopingMall: {
    text: 'Shopping mall',
    icon: markRaw(BagsIcon),
  },
  parkPlaygrounds: {
    text: 'Unsafe park and playgrounds',
    icon: markRaw(ParkIcon),
  },
  publicAreas: {
    text: 'Unsupervised public areas',
    icon: markRaw(BuildingIcon),
  },
  '1-2': {
    text: '1-2',
    icon: markRaw(OneTwoIcon),
  },
  '3-5': {
    text: '3-5',
    icon: markRaw(ThreeFiveIcon),
  },
  '6-10': {
    text: '6-10',
    icon: markRaw(SixTenIcon),
  },
  '10+': {
    text: '10+',
    icon: markRaw(OverTenIcon),
  },
  realTimeTracking: {
    text: 'Real-time location tracking',
    icon: markRaw(MapIcon),
  },
  placeAlerts: {
    text: 'Never',
    icon: markRaw(BellIcon),
  },
  sosButton: {
    text: 'Never',
    icon: markRaw(FlasherIcon),
  },
  all: {
    text: 'Never',
    icon: markRaw(CheckmarkIcon),
  },
  work: {
    text: 'Work',
    icon: markRaw(WorkIcon),
  },
  restaurants: {
    text: 'Bar & Restaurants',
    icon: markRaw(RestaurantsIcon),
  },
  partnerHonesty: {
    text: 'I doubt my partner’s honesty about location',
    icon: markRaw(HeartbreakIcon),
  },
  casino: {
    text: 'Bars & casinos',
    icon: markRaw(CasinoIcon),
  },
  nightclub: {
    text: 'Nightclub',
    icon: markRaw(RestaurantsIcon),
  },
  hotel: {
    text: 'Hotels',
    icon: markRaw(HotelIcon),
  },
  exHouseWork: {
    text: 'Ex’s house/work',
    icon: markRaw(HomeIcon),
  },
  matchFriendLocation: {
    text: 'Match friend’s location to me more often',
    icon: markRaw(FriendsIcon),
  },
  crime: {
    text: 'Area with hight crime rates',
    icon: markRaw(CriminalIcon),
  },
  medical: {
    text: 'Medical institution',
    icon: markRaw(MedicalIcon),
  },
  gettingLost: {
    text: 'Prevent grandparent from getting lost',
    icon: markRaw(MagnifierIcon),
  },
  distantPlaces: {
    text: 'Distant places from home',
    icon: markRaw(RouteIcon),
  },
  highRiskInjury: {
    text: 'High-risk injury locations',
    icon: markRaw(BandageIcon),
  },
  easyLost: {
    text: 'Easily lost locations',
    icon: markRaw(MagnifierIcon),
  },
};

const questions = {
  initial: [
    {
      id: 'who',
      question: 'Who do want to track first?',
      answers: [
        {
          text: 'Partner',
          icon: markRaw(PartnerIcon),
        },
        {
          text: 'Kid',
          icon: markRaw(KidIcon),
        },
        {
          text: 'Friend',
          icon: markRaw(CamsIcon),
        },
        {
          text: 'Sibling',
          icon: markRaw(SiblingIcon),
        },
        {
          text: 'Grandparent',
          icon: markRaw(GrandparentIcon),
        },
        {
          text: 'Other',
          icon: markRaw(OtherIcon),
        },
      ],
    },
  ],
  partner: [
    {
      id: 'notifiedLocations',
      multiple: true,
      question: replaceName(questionsList[0], 'Partner'),
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
      question: replaceName(questionsList[1], 'Partner'),
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
      question: replaceName(questionsList[2], 'Partner'),
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
      question: replaceName(questionsList[3], 'Partner'),
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
      question: replaceName(questionsList[4], 'Partner'),
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
      question: replaceName(questionsList[5], 'Partner'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      question: replaceName(questionsList[6], 'Partner'),
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
      question: replaceName(questionsList[0], 'Kid'),
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
      question: replaceName(questionsList[1], 'Kid'),
      answers: [answersList.safety, answersList.connection, answersList.protect, answersList.other],
    },
    {
      id: 'checkFrequency',
      multiple: false,
      question: replaceName(questionsList[2], 'Kid'),
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
      question: replaceName(questionsList[3], 'Kid'),
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
      question: replaceName(questionsList[4], 'Kid'),
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
      question: replaceName(questionsList[5], 'Kid'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      question: replaceName(questionsList[6], 'Kid'),
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
      question: replaceName(questionsList[0], 'Friend'),
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
      question: replaceName(questionsList[1], 'Friend'),
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
      question: replaceName(questionsList[2], 'Friend'),
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
      question: replaceName(questionsList[3], 'Friend'),
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
      question: replaceName(questionsList[4], 'Friend'),
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
      question: replaceName(questionsList[5], 'Friend'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      question: replaceName(questionsList[6], 'Friend'),
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
      question: replaceName(questionsList[0], 'Sibling'),
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
      question: replaceName(questionsList[1], 'Sibling'),
      answers: [answersList.safety, answersList.connection, answersList.other],
    },
    {
      id: 'checkFrequency',
      multiple: false,
      question: replaceName(questionsList[2], 'Sibling'),
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
      question: replaceName(questionsList[3], 'Sibling'),
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
      question: replaceName(questionsList[4], 'Sibling'),
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
      question: replaceName(questionsList[5], 'Sibling'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      question: replaceName(questionsList[6], 'Sibling'),
      answers: [
        answersList.realTimeTracking,
        answersList.placeAlerts,
        answersList.sosButton,
        answersList.all,
        answersList.other,
      ],
    },
  ],
  grandParent: [
    {
      id: 'notifiedLocations',
      multiple: true,
      question: replaceName(questionsList[0], 'Grandparent'),
      answers: [answersList.home, answersList.work, answersList.medical, answersList.other],
    },
    {
      id: 'reason',
      multiple: false,
      question: replaceName(questionsList[1], 'Grandparent'),
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
      question: replaceName(questionsList[2], 'Grandparent'),
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
      question: replaceName(questionsList[3], 'Grandparent'),
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
      question: replaceName(questionsList[4], 'Grandparent'),
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
      question: replaceName(questionsList[5], 'Grandparent'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      question: replaceName(questionsList[6], 'Grandparent'),
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
      question: replaceName(questionsList[0], 'Other'),
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
      question: replaceName(questionsList[1], 'Other'),
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
      question: replaceName(questionsList[2], 'Other'),
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
      question: replaceName(questionsList[3], 'Other'),
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
      question: replaceName(questionsList[4], 'Other'),
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
      question: replaceName(questionsList[5], 'Other'),
      answers: [answersList['1-2'], answersList['3-5'], answersList['6-10'], answersList['10+']],
    },
    {
      id: 'features',
      multiple: true,
      question: replaceName(questionsList[6], 'Other'),
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

export const useQuizStore = defineStore('quiz', {
  state: () => {
    return {
      progress: {
        total: 15,
        current: -1,
      },
      answers: {
        who: 'initial',
        notifiedLocations: ['Other'],
        reason: 'Other',
        checkFrequency: 'Never',
        updateFrequency: 'Other',
        inappropriateLocations: ['Other'],
        trackingPeoples: '0',
        features: ['Other'],
      },
    };
  },
  actions: {
    getNextQuestion() {
      this.progress.current++;
      return questions[this.answers.who as keyof typeof questions][this.progress.current];
    },
    getProgress() {
      return this.progress;
    },
    setAnswer(id: keyof typeof this.answers, value: any) {
      this.answers[id] = value;
    },
  },
});
