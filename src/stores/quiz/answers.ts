import BagsIcon from '../../components/icons/BagsIcon.vue';
import BandageIcon from '../../components/icons/BandageIcon.vue';
import BellIcon from '../../components/icons/BellIcon.vue';
import BuildingIcon from '../../components/icons/BuildingIcon.vue';
import CalendarEveryDayIcon from '../../components/icons/CalendarEveryDayIcon.vue';
import CalendarIcon from '../../components/icons/CalendarIcon.vue';
import CalendarOnceAWeekIcon from '../../components/icons/CalendarOnceAWeekIcon.vue';
import CalendarRandomDayIcon from '../../components/icons/CalendarRandomDayIcon.vue';
import CamsIcon from '../../components/icons/CamsIcon.vue';
import CasinoIcon from '../../components/icons/CasinoIcon.vue';
import CheckmarkIcon from '../../components/icons/CheckmarkIcon.vue';
import ClockFifteenMinutesIcon from '../../components/icons/ClockFifteenMinutesIcon.vue';
import ClockFiveMinutesIcon from '../../components/icons/ClockFiveMinutesIcon.vue';
import ClockIcon from '../../components/icons/ClockIcon.vue';
import ClockSixtyMinutesIcon from '../../components/icons/ClockSixtyMinutesIcon.vue';
import CommunicationIcon from '../../components/icons/CommunicationIcon.vue';
import CriminalIcon from '../../components/icons/CriminalIcon.vue';
import FlasherIcon from '../../components/icons/FlasherIcon.vue';
import FriendsIcon from '../../components/icons/FriendsIcon.vue';
import GrandparentIcon from '../../components/icons/GrandparentIcon.vue';
import HeartbreakIcon from '../../components/icons/HeartbreakIcon.vue';
import HobbyIcon from '../../components/icons/HobbyIcon.vue';
import HomeIcon from '../../components/icons/HomeIcon.vue';
import HotelIcon from '../../components/icons/HotelIcon.vue';
import KidIcon from '../../components/icons/KidIcon.vue';
import LocationIcon from '../../components/icons/LocationIcon.vue';
import MagnifierIcon from '../../components/icons/MagnifierIcon.vue';
import MapIcon from '../../components/icons/MapIcon.vue';
import MedicalIcon from '../../components/icons/MedicalIcon.vue';
import OtherIcon from '../../components/icons/OtherIcon.vue';
import ParkIcon from '../../components/icons/ParkIcon.vue';
import PartnerIcon from '../../components/icons/PartnerIcon.vue';
import ProtectionIcon from '../../components/icons/ProtectionIcon.vue';
import RefreshIcon from '../../components/icons/RefreshIcon.vue';
import RestaurantsIcon from '../../components/icons/RestaurantsIcon.vue';
import RouteIcon from '../../components/icons/RouteIcon.vue';
import ShoolIcon from '../../components/icons/ShoolIcon.vue';
import SiblingIcon from '../../components/icons/SiblingIcon.vue';
import WarningIcon from '../../components/icons/WarningIcon.vue';
import WorkIcon from '../../components/icons/WorkIcon.vue';
import OneTwoIcon from '../../components/icons/OneTwoIcon.vue';
import ThreeFiveIcon from '../../components/icons/ThreeFiveIcon.vue';
import SixTenIcon from '../../components/icons/SixTenIcon.vue';
import OverTenIcon from '../../components/icons/OverTenIcon.vue';
import { markRaw } from 'vue';

import type {Answers} from './types'

export const answersList: Answers = {
  partner: {
    text: 'Partner',
    icon: markRaw(PartnerIcon),
  },
  kid: {
    text: 'Kid',
    icon: markRaw(KidIcon),
  },
  friend: {
    text: 'Friend',
    icon: markRaw(CamsIcon),
  },
  sibling: {
    text: 'Sibling',
    icon: markRaw(SiblingIcon),
  },
  grandparent: {
    text: 'Grandparent',
    icon: markRaw(GrandparentIcon),
  },
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
    text: 'Place alerts',
    icon: markRaw(BellIcon),
  },
  sosButton: {
    text: 'SOS button',
    icon: markRaw(FlasherIcon),
  },
  all: {
    text: 'All of the above',
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
