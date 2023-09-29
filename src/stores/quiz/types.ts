import {
  type DefineComponent,
  type Raw,
  type ComponentOptionsMixin,
  type ExtractPropTypes,
} from 'vue';

export type Answer = {
  text: string;
  icon: Raw<
    DefineComponent<
      {},
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      string,
      Readonly<ExtractPropTypes<{}>>,
      {},
      {}
    >
  >;
};

export type Answers = {
  partner: Answer;
  kid: Answer;
  friend: Answer;
  sibling: Answer;
  grandparent: Answer;
  home: Answer;
  school: Answer;
  friends: Answer;
  hobby: Answer;
  other: Answer;
  safety: Answer;
  connection: Answer;
  protect: Answer;
  realTimeUpdates: Answer;
  fiveMin: Answer;
  fifteenMin: Answer;
  oneHour: Answer;
  everyHour: Answer;
  everyDay: Answer;
  onceAWeek: Answer;
  rarely: Answer;
  never: Answer;
  unknownLocation: Answer;
  friendsHome: Answer;
  shopingMall: Answer;
  parkPlaygrounds: Answer;
  publicAreas: Answer;
  '1-2': Answer;
  '3-5': Answer;
  '6-10': Answer;
  '10+': Answer;
  realTimeTracking: Answer;
  placeAlerts: Answer;
  sosButton: Answer;
  all: Answer;
  work: Answer;
  restaurants: Answer;
  partnerHonesty: Answer;
  casino: Answer;
  nightclub: Answer;
  hotel: Answer;
  exHouseWork: Answer;
  matchFriendLocation: Answer;
  crime: Answer;
  medical: Answer;
  gettingLost: Answer;
  distantPlaces: Answer;
  highRiskInjury: Answer;
  easyLost: Answer;
};

export type QuestionId =
  | 'who'
  | 'notifiedLocations'
  | 'reason'
  | 'checkFrequency'
  | 'updateFrequency'
  | 'inappropriateLocations'
  | 'trackingPeoples'
  | 'features';

export type Question = {
  multiple: boolean;
  id: QuestionId;
  text: string;
  answers: Answer[];
};

export type Questions = {
  partner: Question[];
  kid: Question[];
  friend: Question[];
  sibling: Question[];
  grandparent: Question[];
  other: Question[];
};
