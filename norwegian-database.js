/**
 * Оптимизированная база данных для изучения норвежского языка
 * Поддерживает большие объемы данных с эффективным поиском
 */

// Индексы для быстрого поиска
const SEARCH_INDEX = new Map();
const NORWEGIAN_INDEX = new Map();
const RUSSIAN_INDEX = new Map();

// Основная база данных норвежского языка
const NORWEGIAN_DATABASE = {
    // Базовые слова и фразы
    vocabulary: [
        {
            id: 1,
            norwegian: "hei",
            russian: "привет",
            category: "greetings",
            level: "beginner",
            type: "word",
            pronunciation: "хай",
            examples: [
                { no: "Hei! Hvordan har du det?", ru: "Привет! Как дела?" }
            ]
        },
        {
            id: 2,
            norwegian: "takk",
            russian: "спасибо",
            category: "greetings",
            level: "beginner", 
            type: "word",
            pronunciation: "так",
            examples: [
                { no: "Takk for hjelpen!", ru: "Спасибо за помощь!" }
            ]
        },
        {
            id: 3,
            norwegian: "god morgen",
            russian: "доброе утро",
            category: "greetings",
            level: "beginner",
            type: "phrase",
            pronunciation: "гу морген",
            examples: [
                { no: "God morgen! Har du sovet godt?", ru: "Доброе утро! Хорошо спал?" }
            ]
        },
        {
            id: 4,
            norwegian: "beklager",
            russian: "извините",
            category: "greetings",
            level: "beginner",
            type: "word",
            pronunciation: "беклагер",
            examples: [
                { no: "Beklager, jeg forstår ikke.", ru: "Извините, я не понимаю." }
            ]
        },
        {
            id: 5,
            norwegian: "hvor mye koster det?",
            russian: "сколько это стоит?",
            category: "shopping",
            level: "beginner",
            type: "phrase",
            pronunciation: "вор мюе костер де",
            examples: [
                { no: "Unnskyld, hvor mye koster dette?", ru: "Извините, сколько это стоит?" }
            ]
        },
        {
            id: 6,
            norwegian: "jeg forstår ikke",
            russian: "я не понимаю",
            category: "communication",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй форшор икке",
            examples: [
                { no: "Beklager, jeg forstår ikke norsk så godt.", ru: "Извините, я не очень хорошо понимаю норвежский." }
            ]
        },
        {
            id: 7,
            norwegian: "kan du hjelpe meg?",
            russian: "можете ли вы мне помочь?",
            category: "communication",
            level: "beginner",
            type: "phrase",
            pronunciation: "кан ду ельпе май",
            examples: [
                { no: "Unnskyld, kan du hjelpe meg med veien?", ru: "Извините, можете помочь мне с дорогой?" }
            ]
        },
        {
            id: 8,
            norwegian: "jeg kommer fra Russland",
            russian: "я из России",
            category: "personal_info",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй коммер фра руссланн",
            examples: [
                { no: "Hei, jeg kommer fra Russland.", ru: "Привет, я из России." }
            ]
        },
        // --- GREETINGS ---
        {
            id: 9,
            norwegian: "god dag",
            russian: "добрый день",
            category: "greetings",
            level: "beginner",
            type: "phrase",
            pronunciation: "гу даг",
            examples: [
                { no: "God dag! Hvordan går det?", ru: "Добрый день! Как дела?" }
            ]
        },
        {
            id: 10,
            norwegian: "god kveld",
            russian: "добрый вечер",
            category: "greetings",
            level: "beginner",
            type: "phrase",
            pronunciation: "гу квель",
            examples: [
                { no: "God kveld! Hva gjør du i kveld?", ru: "Добрый вечер! Чем занимаешься вечером?" }
            ]
        },
        {
            id: 11,
            norwegian: "ha det",
            russian: "пока",
            category: "greetings",
            level: "beginner",
            type: "phrase",
            pronunciation: "ха дэ",
            examples: [
                { no: "Ha det! Vi sees i morgen.", ru: "Пока! Увидимся завтра." }
            ]
        },
        {
            id: 12,
            norwegian: "vi sees",
            russian: "увидимся",
            category: "greetings",
            level: "beginner",
            type: "phrase",
            pronunciation: "ви сэс",
            examples: [
                { no: "Vi sees senere!", ru: "Увидимся позже!" }
            ]
        },
        {
            id: 13,
            norwegian: "hvordan har du det?",
            russian: "как дела?",
            category: "greetings",
            level: "beginner",
            type: "phrase",
            pronunciation: "вурдан хар ду дэ",
            examples: [
                { no: "Hei! Hvordan har du det?", ru: "Привет! Как дела?" }
            ]
        },
        {
            id: 14,
            norwegian: "hyggelig å møte deg",
            russian: "приятно познакомиться",
            category: "greetings",
            level: "beginner",
            type: "phrase",
            pronunciation: "хюгели о мёте дай",
            examples: [
                { no: "Hyggelig å møte deg!", ru: "Приятно познакомиться!" }
            ]
        },
        {
            id: 15,
            norwegian: "velkommen",
            russian: "добро пожаловать",
            category: "greetings",
            level: "beginner",
            type: "word",
            pronunciation: "велькоммен",
            examples: [
                { no: "Velkommen til Norge!", ru: "Добро пожаловать в Норвегию!" }
            ]
        },
        {
            id: 16,
            norwegian: "farvel",
            russian: "прощай",
            category: "greetings",
            level: "beginner",
            type: "word",
            pronunciation: "фарвель",
            examples: [
                { no: "Farvel, vi sees kanskje igjen.", ru: "Прощай, возможно, ещё увидимся." }
            ]
        },
        // --- SHOPPING ---
        {
            id: 17,
            norwegian: "jeg vil kjøpe",
            russian: "я хочу купить",
            category: "shopping",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй вил шёпе",
            examples: [
                { no: "Jeg vil kjøpe en billett.", ru: "Я хочу купить билет." }
            ]
        },
        {
            id: 18,
            norwegian: "har dere ...?",
            russian: "у вас есть ...?",
            category: "shopping",
            level: "beginner",
            type: "phrase",
            pronunciation: "хар дерэ",
            examples: [
                { no: "Har dere melk?", ru: "У вас есть молоко?" }
            ]
        },
        {
            id: 19,
            norwegian: "kan jeg få kvittering?",
            russian: "можно чек?",
            category: "shopping",
            level: "beginner",
            type: "phrase",
            pronunciation: "кан яй фо квитеринг",
            examples: [
                { no: "Kan jeg få kvittering, takk?", ru: "Можно чек, спасибо?" }
            ]
        },
        {
            id: 20,
            norwegian: "jeg betaler med kort",
            russian: "я плачу картой",
            category: "shopping",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй беталер мед корт",
            examples: [
                { no: "Jeg betaler med kort.", ru: "Я плачу картой." }
            ]
        },
        {
            id: 21,
            norwegian: "er det på tilbud?",
            russian: "это по акции?",
            category: "shopping",
            level: "beginner",
            type: "phrase",
            pronunciation: "эр дэ по тильбуд",
            examples: [
                { no: "Er det på tilbud i dag?", ru: "Это сегодня по акции?" }
            ]
        },
        // --- COMMUNICATION ---
        {
            id: 22,
            norwegian: "snakker du engelsk?",
            russian: "вы говорите по-английски?",
            category: "communication",
            level: "beginner",
            type: "phrase",
            pronunciation: "снакер ду энгельск",
            examples: [
                { no: "Snakker du engelsk?", ru: "Вы говорите по-английски?" }
            ]
        },
        {
            id: 23,
            norwegian: "kan du gjenta?",
            russian: "можете повторить?",
            category: "communication",
            level: "beginner",
            type: "phrase",
            pronunciation: "кан ду йента",
            examples: [
                { no: "Kan du gjenta, vær så snill?", ru: "Можете повторить, пожалуйста?" }
            ]
        },
        {
            id: 24,
            norwegian: "jeg forstår",
            russian: "я понимаю",
            category: "communication",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй форшор",
            examples: [
                { no: "Ja, jeg forstår.", ru: "Да, я понимаю." }
            ]
        },
        {
            id: 25,
            norwegian: "jeg snakker ikke norsk",
            russian: "я не говорю по-норвежски",
            category: "communication",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй снаккер ике норск",
            examples: [
                { no: "Beklager, jeg snakker ikke norsk.", ru: "Извините, я не говорю по-норвежски." }
            ]
        },
        // --- PERSONAL INFO ---
        {
            id: 26,
            norwegian: "jeg heter ...",
            russian: "меня зовут ...",
            category: "personal_info",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй хэтер",
            examples: [
                { no: "Hei, jeg heter Anna.", ru: "Привет, меня зовут Анна." }
            ]
        },
        {
            id: 27,
            norwegian: "hvor bor du?",
            russian: "где ты живёшь?",
            category: "personal_info",
            level: "beginner",
            type: "phrase",
            pronunciation: "вур бур ду",
            examples: [
                { no: "Hvor bor du?", ru: "Где ты живёшь?" }
            ]
        },
        {
            id: 28,
            norwegian: "jeg bor i Oslo",
            russian: "я живу в Осло",
            category: "personal_info",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй бур и ослу",
            examples: [
                { no: "Jeg bor i Oslo.", ru: "Я живу в Осло." }
            ]
        },
        {
            id: 29,
            norwegian: "hvor gammel er du?",
            russian: "сколько тебе лет?",
            category: "personal_info",
            level: "beginner",
            type: "phrase",
            pronunciation: "вур гаммель эр ду",
            examples: [
                { no: "Hvor gammel er du?", ru: "Сколько тебе лет?" }
            ]
        },
        {
            id: 30,
            norwegian: "jeg er 25 år gammel",
            russian: "мне 25 лет",
            category: "personal_info",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй эр 25 ор гаммель",
            examples: [
                { no: "Jeg er 25 år gammel.", ru: "Мне 25 лет." }
            ]
        },
        // --- FOOD ---
        {
            id: 31,
            norwegian: "jeg er sulten",
            russian: "я голоден",
            category: "food",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй эр султен",
            examples: [
                { no: "Jeg er sulten. Kan vi spise?", ru: "Я голоден. Можем поесть?" }
            ]
        },
        {
            id: 32,
            norwegian: "jeg er tørst",
            russian: "я хочу пить",
            category: "food",
            level: "beginner",
            type: "phrase",
            pronunciation: "яй эр тёшт",
            examples: [
                { no: "Jeg er tørst. Har du vann?", ru: "Я хочу пить. У тебя есть вода?" }
            ]
        },
        {
            id: 33,
            norwegian: "frokost",
            russian: "завтрак",
            category: "food",
            level: "beginner",
            type: "word",
            pronunciation: "фрокост",
            examples: [
                { no: "Vi spiser frokost klokka åtte.", ru: "Мы завтракаем в восемь." }
            ]
        },
        {
            id: 34,
            norwegian: "middag",
            russian: "ужин",
            category: "food",
            level: "beginner",
            type: "word",
            pronunciation: "мидаг",
            examples: [
                { no: "Hva har vi til middag?", ru: "Что у нас на ужин?" }
            ]
        },
        {
            id: 35,
            norwegian: "kaffe",
            russian: "кофе",
            category: "food",
            level: "beginner",
            type: "word",
            pronunciation: "кафе",
            examples: [
                { no: "Vil du ha kaffe?", ru: "Хочешь кофе?" }
            ]
        },
        {
            id: 36,
            norwegian: "brød",
            russian: "хлеб",
            category: "food",
            level: "beginner",
            type: "word",
            pronunciation: "брё",
            examples: [
                { no: "Kan du gi meg brødet?", ru: "Можешь передать хлеб?" }
            ]
        },
        // --- TRANSPORT ---
        {
            id: 37,
            norwegian: "buss",
            russian: "автобус",
            category: "transport",
            level: "beginner",
            type: "word",
            pronunciation: "бусс",
            examples: [
                { no: "Når går bussen?", ru: "Когда идёт автобус?" }
            ]
        },
        {
            id: 38,
            norwegian: "tog",
            russian: "поезд",
            category: "transport",
            level: "beginner",
            type: "word",
            pronunciation: "тог",
            examples: [
                { no: "Hvor er togstasjonen?", ru: "Где вокзал?" }
            ]
        },
        {
            id: 39,
            norwegian: "fly",
            russian: "самолёт",
            category: "transport",
            level: "beginner",
            type: "word",
            pronunciation: "флю",
            examples: [
                { no: "Når går flyet til Bergen?", ru: "Когда самолёт в Берген?" }
            ]
        },
        {
            id: 40,
            norwegian: "bil",
            russian: "машина",
            category: "transport",
            level: "beginner",
            type: "word",
            pronunciation: "биль",
            examples: [
                { no: "Jeg har en bil.", ru: "У меня есть машина." }
            ]
        },
        // --- TIME ---
        {
            id: 41,
            norwegian: "klokke",
            russian: "часы",
            category: "time",
            level: "beginner",
            type: "word",
            pronunciation: "клокке",
            examples: [
                { no: "Hva er klokka?", ru: "Который час?" }
            ]
        },
        {
            id: 42,
            norwegian: "i dag",
            russian: "сегодня",
            category: "time",
            level: "beginner",
            type: "phrase",
            pronunciation: "и даг",
            examples: [
                { no: "Hva gjør du i dag?", ru: "Что ты делаешь сегодня?" }
            ]
        },
        {
            id: 43,
            norwegian: "i morgen",
            russian: "завтра",
            category: "time",
            level: "beginner",
            type: "phrase",
            pronunciation: "и морген",
            examples: [
                { no: "Vi sees i morgen.", ru: "Увидимся завтра." }
            ]
        },
        {
            id: 44,
            norwegian: "uke",
            russian: "неделя",
            category: "time",
            level: "beginner",
            type: "word",
            pronunciation: "уке",
            examples: [
                { no: "En uke har sju dager.", ru: "В неделе семь дней." }
            ]
        },
        // --- WEATHER ---
        {
            id: 45,
            norwegian: "det regner",
            russian: "идёт дождь",
            category: "weather",
            level: "beginner",
            type: "phrase",
            pronunciation: "дэ рэгнер",
            examples: [
                { no: "Det regner i dag.", ru: "Сегодня идёт дождь." }
            ]
        },
        {
            id: 46,
            norwegian: "det er sol",
            russian: "солнечно",
            category: "weather",
            level: "beginner",
            type: "phrase",
            pronunciation: "дэ эр соль",
            examples: [
                { no: "Det er sol og varmt.", ru: "Солнечно и тепло." }
            ]
        },
        {
            id: 47,
            norwegian: "det snør",
            russian: "идёт снег",
            category: "weather",
            level: "beginner",
            type: "phrase",
            pronunciation: "дэ снёр",
            examples: [
                { no: "Det snør mye om vinteren.", ru: "Зимой часто идёт снег." }
            ]
        },
        {
            id: 48,
            norwegian: "det er kaldt",
            russian: "холодно",
            category: "weather",
            level: "beginner",
            type: "phrase",
            pronunciation: "дэ эр кальт",
            examples: [
                { no: "Det er kaldt ute.", ru: "На улице холодно." }
            ]
        },
        // ...можно продолжать аналогично для других категорий и уровней...
    ],

    // Грамматические правила
    grammar: [
        {
            id: 1,
            topic: "артикли",
            norwegian_rule: "en/et + noun, den/det + adjective + noun",
            russian_explanation: "В норвежском есть два неопределенных артикля: 'en' (мужской/женский род) и 'et' (средний род)",
            examples: [
                { no: "en bil (машина)", ru: "неопределенный артикль мужского рода" },
                { no: "et hus (дом)", ru: "неопределенный артикль среднего рода" },
                { no: "den røde bilen (красная машина)", ru: "определенный артикль + прилагательное" }
            ],
            level: "beginner"
        },
        {
            id: 2,
            topic: "множественное число",
            norwegian_rule: "добавление -er, -e, или изменение корня",
            russian_explanation: "Множественное число в норвежском образуется несколькими способами",
            examples: [
                { no: "bil → biler (машина → машины)", ru: "добавление -er" },
                { no: "hus → hus (дом → дома)", ru: "без изменений" },
                { no: "mann → menn (мужчина → мужчины)", ru: "изменение корня" }
            ],
            level: "beginner"
        }
    ],

    // Категории для организации
    categories: {
        greetings: "приветствие",
        shopping: "покупки", 
        communication: "общение",
        personal_info: "личная информация",
        food: "еда",
        transport: "транспорт",
        time: "время",
        weather: "погода"
    },

    // Уровни сложности
    levels: {
        beginner: "начинающий",
        intermediate: "средний", 
        advanced: "продвинутый"
    }
};

/**
 * Класс для оптимизированного поиска в базе данных
 */
class NorwegianSearchEngine {
    constructor() {
        this.buildIndexes();
    }

    /**
     * Построение индексов для быстрого поиска
     */
    buildIndexes() {
        NORWEGIAN_DATABASE.vocabulary.forEach(item => {
            // Индекс норвежских слов
            const norwegianWords = item.norwegian.toLowerCase().split(' ');
            norwegianWords.forEach(word => {
                if (!NORWEGIAN_INDEX.has(word)) {
                    NORWEGIAN_INDEX.set(word, []);
                }
                NORWEGIAN_INDEX.get(word).push(item);
            });

            // Индекс русских слов
            const russianWords = item.russian.toLowerCase().split(' ');
            russianWords.forEach(word => {
                if (!RUSSIAN_INDEX.has(word)) {
                    RUSSIAN_INDEX.set(word, []);
                }
                RUSSIAN_INDEX.get(word).push(item);
            });

            // Общий поисковый индекс
            const allWords = [...norwegianWords, ...russianWords, item.category];
            allWords.forEach(word => {
                if (!SEARCH_INDEX.has(word)) {
                    SEARCH_INDEX.set(word, []);
                }
                SEARCH_INDEX.get(word).push(item);
            });
        });
    }

    /**
     * Поиск по запросу пользователя
     */
    search(query) {
        const normalizedQuery = this.normalizeText(query);
        const words = normalizedQuery.split(' ');
        const results = new Map();

        words.forEach(word => {
            // Поиск точных совпадений
            if (SEARCH_INDEX.has(word)) {
                SEARCH_INDEX.get(word).forEach(item => {
                    results.set(item.id, item);
                });
            }

            // Поиск частичных совпадений
            SEARCH_INDEX.forEach((items, indexWord) => {
                if (indexWord.includes(word) || word.includes(indexWord)) {
                    items.forEach(item => {
                        results.set(item.id, item);
                    });
                }
            });
        });

        return Array.from(results.values());
    }

    /**
     * Нормализация текста для поиска
     */
    normalizeText(text) {
        return text.toLowerCase()
            .replace(/[её]/g, 'е')
            .replace(/[ъь]/g, '')
            .replace(/[^\w\s]/g, ' ')
            .trim();
    }

    /**
     * Получение случайного слова для изучения
     */
    getRandomWord(level = null, category = null) {
        let filtered = NORWEGIAN_DATABASE.vocabulary;
        
        if (level) {
            filtered = filtered.filter(item => item.level === level);
        }
        
        if (category) {
            filtered = filtered.filter(item => item.category === category);
        }

        return filtered[Math.floor(Math.random() * filtered.length)];
    }

    /**
     * Получение слов по категории
     */
    getByCategory(category) {
        return NORWEGIAN_DATABASE.vocabulary.filter(item => item.category === category);
    }

    /**
     * Получение грамматических правил
     */
    getGrammarRules(level = null) {
        let rules = NORWEGIAN_DATABASE.grammar;
        
        if (level) {
            rules = rules.filter(rule => rule.level === level);
        }
        
        return rules;
    }
}

// Экспорт для использования в основном приложении
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NORWEGIAN_DATABASE, NorwegianSearchEngine };
} else {
    window.NORWEGIAN_DATABASE = NORWEGIAN_DATABASE;
    window.NorwegianSearchEngine = NorwegianSearchEngine;
}
