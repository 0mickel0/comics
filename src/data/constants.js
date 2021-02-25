//M
import image001 from '../static/images/Image001.png';
import image002 from '../static/images/Image002.png';
import image003 from '../static/images/Image003.png';
import image004 from '../static/images/Image004.png';
import image005 from '../static/images/Image005.png';
import image006 from '../static/images/Image006.png';

//V
import image007 from '../static/images/Image007.jpg';
import image008 from '../static/images/Image008.jpg';
import image009 from '../static/images/Image009.jpg';
import image010 from '../static/images/Image010.jpg';

//L
import image011 from '../static/images/Image011.png';
import image012 from '../static/images/Image012.png';
import image013 from '../static/images/Image013.png';
import image014 from '../static/images/Image014.png';

//V
import image015 from '../static/images/Image015.png';
import image016 from '../static/images/Image016.png';
import image017 from '../static/images/Image017.png';
import image018 from '../static/images/Image018.png';
import image019 from '../static/images/Image019.png';
import image020 from '../static/images/Image020.png';
import image021 from '../static/images/Image021.png';

//M
import image022 from '../static/images/Image022.png';
import image023 from '../static/images/Image023.png';
import image024 from '../static/images/Image024.png';
import image025 from '../static/images/Image025.png';

//L
import image026 from '../static/images/Image026.png';
import image027 from '../static/images/Image027.png';
import image028 from '../static/images/Image028.png';
import image029 from '../static/images/Image029.png';
import image030 from '../static/images/Image030.png';

const typing = require('../static/audio/typing.mp3').default;
const computerWork = require('../static/audio/computerWork.mp3').default;
const scroll = require('../static/audio/scroll.mp3').default;
const veryNice = require('../static/audio/veryNice2.mp3').default;
const omg = require('../static/audio/omg.mp3').default;
const ohmy = require('../static/audio/ohmy.wav').default;
const lamp = require('../static/audio/lamp.mp3').default;
const summer = require('../static/audio/summer.mp3').default;
const audio7 = require('../static/audio/FU.mp3').default;
const audio8 = require('../static/audio/spank.mp3').default;
const audio9 = require('../static/audio/9samolet.mp3').default;
const audio10 = require('../static/audio/exchangeOpening.mp3').default;
const audio11 = require('../static/audio/11.mp3').default;
const audio12 = require('../static/audio/12.mp3').default;
const audio13 = require('../static/audio/13.mp3').default;
const audio14 = require('../static/audio/14.mp3').default;
const audio15 = require('../static/audio/15.mp3').default;
const audio16 = require('../static/audio/16.mp3').default;
const audio19 = require('../static/audio/19.mp3').default;
const audio20 = require('../static/audio/20.mp3').default;
const audio21 = require('../static/audio/21.mp3').default;
const audio26 = require('../static/audio/26.mp3').default;
const audio27 = require('../static/audio/27.mp3').default;
const audio28 = require('../static/audio/28.mp3').default;
const audio29 = require('../static/audio/29.mp3').default;
const audio30 = require('../static/audio/30.mp3').default;

const comics = [
  {
    image: '1',
    url: image001,
    audio: typing,
    description: {
      text:
        'За окном кружилась пурга. На работе все сделано на месяц вперед. Лень и отсутствие событий, оставалось только тупить в компьютер',
      position: 'bottom-right',
    },
  },
  {
    image: '2',
    url: image002,
    audio: computerWork,
    description: {
      text:
        'Ничего не цепляло. Роману казалось, что в интернете уже всё просмотрено',
      position: 'bottom-left',
    },
  },
  {
    image: '3',
    audio: scroll,
    audioLoop: true,
    url: image003,
  },
  {
    image: '4',
    url: image004,
    audio: omg,
    description: {
      text: 'Вдруг на экране появилось что-то новое и неизведанное',
      position: 'bottom-left',
    },
  },
  {
    image: '5',
    url: image005,
    audio: ohmy,
    description: {
      text:
        'Доходы без существенных усилий! Обезопасить скопленный капитал от воздействия инфляции! Возможность получить большие объемы прибыли!',
      position: 'top-left',
    },
  },
  {
    image: '6',
    audio: veryNice,
    url: image006,
    description: {
      text: 'Биржа привлекла Романа',
      position: 'top-left',
    },
  },
  {
    image: '7',
    url: image007,
    audio: audio7,
    description: {
      text: 'Он решил освободить времечко и реализовать свои мечты',
      position: 'bottom-right',
    },
  },
  {
    image: '8',
    url: image008,
    audio: audio8,
    description: {
      text: 'О да, приятно чувство освобождения',
      position: 'bottom-left',
    },
  },
  {
    image: '9',
    url: image009,
    audio: audio9,
    description: {
      text: 'Для полного погружения нужно присутствовать в самом центре торгов',
      position: 'bottom-left',
    },
  },
  {
    image: '10',
    url: image010,
    audio: audio10,
    description: {
      text: 'Вот она! Знаменитая биржа НАЖДАК',
      position: 'top-left',
    },
  },
  {
    image: '11',
    url: image011,
    audio: audio12,
    description: {
      text: 'На бирже пиздец, черный вторник 2 в худшем его проявлении',
      position: 'bottom',
    },
  },
  {
    image: '12',
    url: image012,
    audio: audio14,
    description: {
      text:
        'Все в панике бегают по бирже, не понимая, что делать дальше. Рома достаточно вареный (дохуя взволнованный) стоит опустошенный',
      position: 'bottom-left',
    },
  },
  {
    image: '13',
    audio: audio13,
    url: image013,
  },
  {
    image: '14',
    url: image014,
    audio: audio11,
    description: {
      text:
        'Брокеры теряли кучу денег каждую минуту. Рынок рухнул. Многие в панике выбрасывались из окон',
      position: 'left',
    },
  },
  {
    image: '15',
    url: image015,
    audio: audio15,
    description: {
      text: 'От отчаяния Романыч шлет все в пизду и прыгает за ними',
      position: 'top',
    },
  },
  { image: '16', audio: audio16, url: image016 },
  { image: '17', audio: audio16, url: image017 },
  { image: '18', audio: audio16, url: image018 },
  {
    image: '19',
    url: image019,
    audio: audio19,
    description: {
      text: 'В полете с него падают очки',
      position: 'right',
    },
  },
  {
    image: '20',
    url: image020,
    audio: audio20,
    description: {
      text:
        'Небоскребы в Америке такие большие, что в полете он успел передумать и вспомил про свои крылья',
      position: 'bottom-left',
    },
  },
  { image: '21', audio: audio21, url: image021 },
  {
    image: '22',
    url: image022,
    audio: typing,
    audioLoop: true,
    description: {
      text:
        'Роман вернулся на биржу и погрузился в трейдинг с головой. Кажется ему не было равных, он разбирался во всех рынках мира, не было ни одной компании про которую он не знал. Ходят слухи, что он даже скупал говно и продавал его втридорого. Время для него перестало существовать...',
      position: 'top-left',
    },
  },
  {
    image: '23',
    url: image023,
    audio: lamp,
    audioLoop: true,
    description: {
      text:
        'Он хотел сходить под себя, чтобы ничего не пропускать, но торги к этому времени остановились и появилась свободная минутка',
      position: 'bottom-left',
    },
  },
  {
    image: '24',
    url: image024,
    audio: lamp,
    audioLoop: true,
    description: {
      text:
        'Задался вопросом Роман, ведь в зеркало на него смотрел уже совсем другой человек',
      position: 'bottom-right',
    },
  },
  {
    image: '25',
    url: image025,
    audio: summer,
    description: {
      text:
        'Он вспомнил свой любимый лук, рофлы над Юлькой, тусы с шакалами и многое другое... всё то, чего ему так не хватает',
      position: 'top-left',
    },
  },
  {
    image: '26',
    url: image026,
    audio: audio26,
    description: {
      text: 'Недолго размышляя, он решил вернуться в родные пенаты',
      position: 'bottom',
    },
  },
  {
    image: '27',
    url: image027,
    audio: audio27,
    description: {
      text:
        'Дома было так уютно, за исключение солнца, которое светило прямо в глаза',
      position: 'bottom',
    },
  },
  { image: '28', audio: audio28, url: image028 },
  {
    image: '29',
    url: image029,
    audio: audio29,
    description: {
      text: 'Пришла посылОчка для вашего мальчика. Время открывать посылочку',
      position: 'bottom',
    },
  },
  { image: '30', audio: audio30, url: image030 },
];

export default comics;
