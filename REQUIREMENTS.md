# Coffee Personality Quiz Requirements

## Product concept

Build a simple web quiz for Basecamp Coffee: "Какая твоя кофейная личность?"

The quiz helps customers discover their coffee personality and receive one coffee recommendation. The experience should feel warm, personal, modern, and minimal.

## Result format

Use format A: show one main result only.

Example:

```text
Ты - Образцовый Классик.
Твой кофе: Фильтр.
```

## Results

| Personality | Coffee | Description |
|---|---|---|
| Образцовый Классик | Фильтр | Ты ценишь понятный ритуал, стабильность и хороший кофе без лишнего шума. |
| Сладкий Энтузиаст | Латте на кокосовом | Ты любишь мягкость, настроение и маленькие радости в течение дня. |
| Кофейный Собеседник | Капучино | Хороший разговор начинается с хорошей чашки. |
| Чувственный Эстет | Раф кофе | Ты выбираешь комфорт, красоту деталей и мягкий вкус с характером. |

## Scoring logic

Each answer maps to one personality. At the end, count which personality received the most answers and show that single winning result.

If there is a tie, choose the first tied personality based on this order:

1. Образцовый Классик
2. Сладкий Энтузиаст
3. Кофейный Собеседник
4. Чувственный Эстет

## Visual style

Use the combined direction from style previews 2 and 3:

- minimal and spacious;
- warm, modern, and editorial;
- strong but not loud typography;
- cream / paper background;
- coffee brown and charcoal text;
- muted green and warm gold accents;
- no clutter;
- no overly playful or cartoon style.

Reference files:

- `style-preview-2.html`
- `style-preview-3.html`
- `style-preview-2-3.html`
- `result-drinks-reference.png`

## Result images

Use images for quiz results.

Preferred direction: stylish modern product photography of drinks only. No people and no hands.

Drink image rules:

- **Фильтр** - must include a clear visible cup with dark filter coffee; a small server/carafe may appear nearby.
- **Латте на кокосовом** - must be in a transparent glass with visible coffee and milk layers.
- **Капучино** - must be in a modern low wide specialty coffee cup with visible foam and latte art.
- **Раф кофе** - should look creamy, soft, and elegant in a ceramic cup.

## Icons

Use icons next to answer options.

Icon style:

- thin and modern;
- аккуратные;
- can be colored, but colors should be muted and tasteful;
- should support the mood of the answer without making the UI noisy.

Suggested icon mapping:

- Coffee / cup icon - ritual, classic, stability;
- Sparkles icon - sweetness, joy, small delight;
- MessageCircle icon - conversation, connection;
- Gem icon - aesthetics, taste, detail.

## Quiz questions

### Question 1

Как начинается твой идеальный выходной?

- Спокойно, с любимым ритуалом -> Образцовый Классик
- С чем-то сладким и новым -> Сладкий Энтузиаст
- За разговором с близким человеком -> Кофейный Собеседник
- Красиво, медленно, со вкусом -> Чувственный Эстет

### Question 2

Какой фильм ты выберешь вечером?

- Проверенную классику, которую приятно пересматривать -> Образцовый Классик
- Легкую романтическую комедию или feel-good кино -> Сладкий Энтузиаст
- Что-то, что потом хочется обсудить с друзьями -> Кофейный Собеседник
- Красивую драму с атмосферой и деталями -> Чувственный Эстет

### Question 3

Что тебе ближе в поездке?

- Знакомый маршрут, хороший отель, все продумано -> Образцовый Классик
- Пробовать десерты, напитки и милые места -> Сладкий Энтузиаст
- Знакомиться с людьми и находить локальные истории -> Кофейный Собеседник
- Искать красивые улицы, музеи и тихие дворики -> Чувственный Эстет

### Question 4

Выбери предмет для рабочего стола

- Хорошая кружка, которой пользуешься каждый день -> Образцовый Классик
- Маленькая приятная штука "для настроения" -> Сладкий Энтузиаст
- Блокнот для идей и разговоров -> Кофейный Собеседник
- Красивый минималистичный объект -> Чувственный Эстет

### Question 5

Что тебя цепляет в кофейне?

- Стабильно хороший вкус -> Образцовый Классик
- Мягкие сладкие напитки и сезонные новинки -> Сладкий Энтузиаст
- Бариста, которые помнят тебя и твой заказ -> Кофейный Собеседник
- Атмосфера, свет, посуда и детали -> Чувственный Эстет

### Question 6

Какой комплимент тебе ближе?

- "На тебя можно положиться" -> Образцовый Классик
- "С тобой становится теплее" -> Сладкий Энтузиаст
- "С тобой легко говорить" -> Кофейный Собеседник
- "У тебя тонкий вкус" -> Чувственный Эстет

## Build notes

- The quiz should be simple and easy to complete.
- Keep the UI focused on one question at a time.
- Show progress, for example "Вопрос 1 из 6".
- Result page should include personality, drink, short description, and image.
- Add a restart button.
