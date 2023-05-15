import {
  LogoGithub,
  Mail,
  LogoInstagram,
  LocationSharp,
} from '@vicons/ionicons5';
import { TelegramPlane } from '@vicons/fa';
import bgImageUrl from '@assets/images/banner.jpeg';
import avatar from '@assets/images/avatar.jpg';


// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const title = "NaCoLiu's Blog";
export const description = 'Pry into whose life.';
export const defaultCity = 'Unknown Region';
export const banner = {
  bgImageUrl: bgImageUrl,
  avatar: avatar,
  title: 'NaCo',
  description: '失去最爱的一个.',
};
export const raving = [
  '飞舞在空中无形的风，那是不是你的短暂抱拥。',
  '一段未醒又做一段，如果这画面有开关。',
  '当所有想的说的要的爱的，都挤在心脏。',
  '似风的语言，提示我天气不自然。',
  '满山遍野的橙子树，你最喜欢的是哪一颗。',
  '怕脱口而出是你姓名。',
  '最喜欢的莫过于你说的那句，我闻到了栀子花香。',
  '那天我们走了很久没有争吵过。',
  '好久没见了什么角色呢。',
  '一颗棋子，到了没有用该舍弃之时，难道下棋的人还会怜惜不舍吗？',
  '那些幼稚的轻狂的勇敢的，从此收着。',
];

export const countdown = [
  {
    date: '2022/8/24',
    title: 'Lost something',
    background: './images/banner.jpeg',
  },
];

export const followMe = [
  {
    icon: LocationSharp,
    title: 'Shanghai',
  },
  {
    icon: LogoGithub,
    url: 'https://github.com/nacoliu',
    title: 'NaCoLiu',
  },
  {
    icon: TelegramPlane,
    url: 'https://t.me/nacoliu',
    title: 't.me/nacoliu',
  },
  {
    icon: Mail,
    url: 'mailto:naco@nco.im',
    title: 'naco@nco.im',
  },
  {
    icon: LogoInstagram,
    url: 'https://instagram.com/nacoliu',
    title: 'Instagram.com/nacoliu',
  },
];

export const defaultPlayer = {
  defaultPlayerId: '1807799505',
  defaultPlayerList: ['1807799505', '4899152', '1891169736'],
};
