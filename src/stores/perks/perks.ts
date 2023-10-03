import gjImage from '../../assets/images/great-job.png';
import qsImage from '../../assets/images/quick-search.png';
import rtlImage from '../../assets/images/real-time-location.png';
import unImage from '../../assets/images/unlimited-notifications.png';
import aiaImage from '../../assets/images/ai-assistant.png';

import type { Perks } from "./types";

export const perks: Perks = [
    {
        title: 'Great job!',
        caption: 'We have received youк answers. Now, let`s explore how Locate 360 can assist you with your needs.',
        content: gjImage,
    },
    {
        title: 'Quick search',
        caption: 'Locate 360 will assist you to find location of your friends easily.',
        content: qsImage,
    },
    {
        title: 'Real time location',
        caption: 'View live updates and history of family`s whereabouts.',
        content: rtlImage,
    },
    {
        title: 'Unlimited notifications',
        caption: 'Received notifications when loved once leave or return to places.',
        content: unImage,
    },
    {
        title: 'AI assistant',
        caption: 'Chat Bot in travel and averyday life.',
        content: aiaImage,
    },
    {
        title: 'What`s your E-mail?',
        caption: 'Please inter your email below so we can create an account for you.',
        content: undefined,
    },
];
