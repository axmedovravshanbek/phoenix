import {makeAutoObservable} from "mobx";
class Store {
    lang = localStorage.getItem('lang') || 'en';
    news = [
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355561/phoenix/z9u7ysedzflh7o0iwj0t.png',
            title: {
                en: 'Energy Ministry comments on major power outage, explains reasons',
                ru: 'Минэнерго прокомментировало масштабное отключение электроэнергии и объяснило причины',
                uz: 'Energetika vazirligi elektr ta\'minotidagi yirik uzilishlarga izoh berdi, sabablarini tushuntirdi',
            },
            subtitle: {
                en: 'Power outage in Uzbekistan was caused by a major accident in...',
                ru: 'Отключение электроэнергии в Узбекистане произошло из-за крупной аварии в...',
                uz: 'O‘zbekistonda elektr ta’minotida uzilishlar sodir bo‘lgan yirik avariya...',
            },
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355560/phoenix/v0d2uuqcdhoivi9f84cw.png',
            title: {
                en: 'Blackout was caused by a short circuit at a thermal power plant in Uzbekistan...',
                ru: 'Отключение произошло из-за короткого замыкания на ТЭЦ в Узбекистане...',
                uz: 'O‘zbekistondagi issiqlik elektr stansiyasidagi qisqa tutashuv tufayli o‘chirilish sodir bo‘ldi...',
            },
            subtitle: {
                en: '',
                uz: '',
                ru: ''
            }
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355560/phoenix/srcy7zey9r5mcilvbczf.png',
            title: {
                en: 'IFC to help Uzbekistan privatize Ferganaazot',
                ru: 'IFC поможет Узбекистану приватизировать Ферганаазот',
                uz: 'IFC O‘zbekistonga Farg‘onaazotni xususiylashtirishda yordam beradi',
            },
            subtitle: {
                en: 'IFC signed an agreement on February 2 to assist the government of Uzbekistan in privatizing one ...',
                uz: 'IFC 2 fevral kuni O‘zbekiston hukumatiga bir ... xususiylashtirishda ko‘maklashish to‘g‘risidagi bitimni imzoladi.',
                ru: 'IFC подписала 2 февраля соглашение об оказании помощи правительству Узбекистана в приватизации одного ...'
            }
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355560/phoenix/ct6fuwin5ok5xqt3vqxo.png',
            title: {
                en: 'Kia K8 sales kick off in Uzbekistan',
                ru: 'В Узбекистане стартовали продажи Kia K8',
                uz: 'O‘zbekistonda Kia K8 sotuvi boshlandi',
            },
            subtitle: {
                en: '',
                uz: '',
                ru: ''
            }
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355560/phoenix/v0d2uuqcdhoivi9f84cw.png',
            title: {
                en: 'Blackout was caused by a short circuit at a thermal power plant in Uzbekistan...',
                ru: 'Отключение произошло из-за короткого замыкания на ТЭЦ в Узбекистане...',
                uz: 'O‘zbekistondagi issiqlik elektr stansiyasidagi qisqa tutashuv tufayli o‘chirilish sodir bo‘ldi...',
            },
            subtitle: {
                en: '',
                uz: '',
                ru: ''
            }
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355560/phoenix/srcy7zey9r5mcilvbczf.png',
            title: {
                en: 'IFC to help Uzbekistan privatize Ferganaazot',
                ru: 'IFC поможет Узбекистану приватизировать Ферганаазот',
                uz: 'IFC O‘zbekistonga Farg‘onaazotni xususiylashtirishda yordam beradi',
            },
            subtitle: {
                en: 'IFC signed an agreement on February 2 to assist the government of Uzbekistan in privatizing one ...',
                uz: 'IFC 2 fevral kuni O‘zbekiston hukumatiga bir ... xususiylashtirishda ko‘maklashish to‘g‘risidagi bitimni imzoladi.',
                ru: 'IFC подписала 2 февраля соглашение об оказании помощи правительству Узбекистана в приватизации одного ...'
            }
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355560/phoenix/ct6fuwin5ok5xqt3vqxo.png',
            title: {
                en: 'Kia K8 sales kick off in Uzbekistan',
                ru: 'В Узбекистане стартовали продажи Kia K8',
                uz: 'O‘zbekistonda Kia K8 sotuvi boshlandi',
            },
            subtitle: {
                en: '',
                uz: '',
                ru: ''
            }
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355561/phoenix/z9u7ysedzflh7o0iwj0t.png',
            title: {
                en: 'Energy Ministry comments on major power outage, explains reasons',
                ru: 'Минэнерго прокомментировало масштабное отключение электроэнергии и объяснило причины',
                uz: 'Energetika vazirligi elektr ta\'minotidagi yirik uzilishlarga izoh berdi, sabablarini tushuntirdi',
            },
            subtitle: {
                en: 'Power outage in Uzbekistan was caused by a major accident in...',
                ru: 'Отключение электроэнергии в Узбекистане произошло из-за крупной аварии в...',
                uz: 'O‘zbekistonda elektr ta’minotida uzilishlar sodir bo‘lgan yirik avariya...',
            },
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355560/phoenix/srcy7zey9r5mcilvbczf.png',
            title: {
                en: 'IFC to help Uzbekistan privatize Ferganaazot',
                ru: 'IFC поможет Узбекистану приватизировать Ферганаазот',
                uz: 'IFC O‘zbekistonga Farg‘onaazotni xususiylashtirishda yordam beradi',
            },
            subtitle: {
                en: 'IFC signed an agreement on February 2 to assist the government of Uzbekistan in privatizing one ...',
                uz: 'IFC 2 fevral kuni O‘zbekiston hukumatiga bir ... xususiylashtirishda ko‘maklashish to‘g‘risidagi bitimni imzoladi.',
                ru: 'IFC подписала 2 февраля соглашение об оказании помощи правительству Узбекистана в приватизации одного ...'
            }
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355560/phoenix/v0d2uuqcdhoivi9f84cw.png',
            title: {
                en: 'Blackout was caused by a short circuit at a thermal power plant in Uzbekistan...',
                ru: 'Отключение произошло из-за короткого замыкания на ТЭЦ в Узбекистане...',
                uz: 'O‘zbekistondagi issiqlik elektr stansiyasidagi qisqa tutashuv tufayli o‘chirilish sodir bo‘ldi...',
            },
            subtitle: {
                en: '',
                uz: '',
                ru: ''
            }
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355561/phoenix/z9u7ysedzflh7o0iwj0t.png',
            title: {
                en: 'Energy Ministry comments on major power outage, explains reasons',
                ru: 'Минэнерго прокомментировало масштабное отключение электроэнергии и объяснило причины',
                uz: 'Energetika vazirligi elektr ta\'minotidagi yirik uzilishlarga izoh berdi, sabablarini tushuntirdi',
            },
            subtitle: {
                en: 'Power outage in Uzbekistan was caused by a major accident in...',
                ru: 'Отключение электроэнергии в Узбекистане произошло из-за крупной аварии в...',
                uz: 'O‘zbekistonda elektr ta’minotida uzilishlar sodir bo‘lgan yirik avariya...',
            },
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355560/phoenix/ct6fuwin5ok5xqt3vqxo.png',
            title: {
                en: 'Kia K8 sales kick off in Uzbekistan',
                ru: 'В Узбекистане стартовали продажи Kia K8',
                uz: 'O‘zbekistonda Kia K8 sotuvi boshlandi',
            },
            subtitle: {
                en: '',
                uz: '',
                ru: ''
            }
        },
    ];
    services = [
        {
            en: 'Finding the exact product on the market from our partner manufacturers',
            uz: 'Bizning hamkor ishlab chiqaruvchilarimizdan aniq mahsulotni topish',
            ru: 'Поиск точного продукта на рынке у наших производителей-партнеров'
        },
        {
            en: 'Preparing documentations during the transportation. Product quality checking procedures prior the pick up and after delivery',
            uz: 'Barcha hujjatlarni tayyorlash. Qabul qilish va yetkazib berishdan keyin mahsulot sifatini tekshirish tartib-qoidalari',
            ru: 'Подготовка всей документации при транспортировке. Процедуры проверки качества продукции до получения и после доставки'
        },
        {
            en: 'Delivering goods to the instructed by our partner logistics companies. Providing all the necessary services for free of cost',
            uz: 'Hamkor logistika kompaniyalarimiz tomonidan tovarlarni yetkazib berish. Barcha kerakli xizmatlarni bepul taqdim etish',
            ru: 'Доставка грузов в порученные нашими партнерами логистические компании. Предоставление всех всех услуг на безвозмездной основе'
        },
    ];
    catalog = [
        {route:'engine', en: 'Engine', uz: 'Dvigatel', ru: 'Двигатель'},
        {route:'gearboxes', en: 'Gearboxes', uz: 'Vites qutilari', ru: 'Коробки передач'},
        {route:'bodyparts', en: 'Cabin and bodyparts', uz: 'Kabina va tana qismlari', ru: 'Кабина и кузовные детали'},
        {route:'loudspeaker', en: 'Loudspeaker Sets', uz: 'Karnay to\'plamlari', ru: 'Наборы громкоговорителей'},
        {route:'chassis', en: 'Chassis and suspension', uz: 'Shassi va osma', ru: 'Шасси и подвеска'},
        {route:'axles', en: 'Axles and steering', uz: 'Akslar va rul boshqaruvi', ru: 'Оси и рулевое управление'},
        {route:'electronics', en: 'Electronics', uz: 'Elektronika', ru: 'Электроника'},
        {route:'brakes', en: 'Brakes', uz: 'Tormozlar', ru: 'Тормоза'},
        {route:'reservoir', en: 'Reservoir', uz: 'Suv ombori', ru: 'водохранилище'},
        {route:'chassisskirts', en: 'Chassisskirts and spoilers', uz: 'Shassi yubkalar va spoylerlar', ru: 'Юбки шасси и спойлеры'},
        {route:'tyres', en: 'Tyres and rims', uz: 'Shinalar va jantlar', ru: 'Шины и диски'},
        {route:'damaged', en: 'Damaged vehicle', uz: 'Shikastlangan avtomobil', ru: 'Поврежденный автомобиль'},
        {route:'denim', en: 'Denim Collections', uz: 'Denim to\'plamlari', ru: 'Джинсовые Коллекции'},
        {route:'chassis', en: 'Chassis and suspension', uz: 'Shassi va osma', ru: 'Шасси и подвеска'},
        {route:'yarn', en: 'Yarn Collections', uz: 'Ip to\'plamlari', ru: 'Коллекции пряжи'},
        {route:'loader', en: 'Loader Trucks', uz: 'Yuk ko\'taruvchi yuk mashinalari', ru: 'Грузовики-погрузчики'},
        {route:'membrane', en: 'MEMBRANE PER VASI DI ESPANSIONE', uz: 'MEMBRAN PER VASI DI ESPANSIONE', ru: 'МЕМБРАНА ДЛЯ ВАСИ ДИ ЭСПАНСИОН'},
        {route:'gas', en: 'Gas', uz: 'Gaz', ru: 'Газ'},
        {route:'lab', en: 'Lab Scale Systems', uz: 'Laboratoriya shkalasi tizimlari', ru: 'Системы лабораторных весов'},
        {route:'demostration', en: 'Demostration Plants', uz: 'Namoyish o\'simliklari', ru: 'Демонстрационные растения'},
        {route:'roll', en: 'Roll Forming Machine', uz: 'Rulo shakllantirish mashinasi', ru: 'Профилегибочная машина'},
        {route:'tube', en: 'Tube Pipe Mill', uz: 'Quvurli quvurlar tegirmoni', ru: 'Трубопроводная мельница'},
        {route:'steel', en: 'Steel Slitting Line', uz: 'Chelik kesish liniyasi', ru: 'Линия продольной резки стали'},
        {route:'jmb', en: 'JMB AIRCRAFTS', uz: 'JMB SAVOLLARI', ru: 'JMB АВИАЦИОННЫЕ САМОЛЁТЫ'},
    ];
    products = [
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355310/phoenix/frsgvbuiacqc6xchowe5.png',
            title: 'Valve cover 23397716'
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647440036/phoenix/ipotbyj97xckvsxqrmhs.png',
            title: 'Valve cover 23397716'
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355310/phoenix/lbutwnsezkljqhff405u.png',
            title: 'Valve cover 23397716'
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355310/phoenix/xsxdqrzcdo1djfozmlcq.png',
            title: 'Lagerkap 7422041175'
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355310/phoenix/o0qinq7xtfxoqauimdyg.png',
            title: 'Tussen tandwiel 7421860076'
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355310/phoenix/lxupv49p7y1eocmbwbk5.png',
            title: 'Tussen tandwiel 7421860076'
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355309/phoenix/ko24psvs25fn3z49tooc.png',
            title: 'Valve cover 23397716'
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647451126/phoenix/k2p635cm3uvtaucva1wf.png',
            title: 'Lagerkap 7422041175'
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355309/phoenix/kzptrrf91vftvwd4evw8.png',
            title: 'Tussen tandwiel 7421860076'
        },
        {
            image: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647451771/phoenix/he1rxjmpzvxgxxbvts2l.png',
            title: 'Tussen tandwiel 7421860076'
        }
    ];
    constructor() {
        makeAutoObservable(this);
    }

    setLang(lang) {
        this.lang = lang;
        localStorage.setItem('lang', lang)
    }
}

export const xStore = new Store();
