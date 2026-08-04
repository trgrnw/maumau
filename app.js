import React, { useMemo, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const h = React.createElement;

const ideas = [
  { icon: "✦", title: "Сними минутное кино", text: "Один кадр, один предмет и неожиданная концовка. Монтаж не обязателен.", color: "coral" },
  { icon: "↗", title: "Иди по новому маршруту", text: "Сверни там, где обычно идёшь прямо, и найди три детали, которых раньше не замечал.", color: "lime" },
  { icon: "◌", title: "Устрой тихий час", text: "Убери экран, включи музыку и нарисуй то, как звучит сегодняшний день.", color: "blue" },
  { icon: "≈", title: "Приготовь блюдо вслепую", text: "Выбери три продукта и придумай из них что-то без поиска рецепта.", color: "yellow" },
  { icon: "♥", title: "Напиши старому другу", text: "Отправь одно тёплое воспоминание без повода и ожиданий.", color: "pink" },
  { icon: "⌁", title: "Собери плейлист места", text: "Пять треков для воображаемого кафе, поезда или города будущего.", color: "violet" }
];

function App() {
  const [index, setIndex] = useState(0);
  const [saved, setSaved] = useState([]);
  const idea = useMemo(() => ideas[index], [index]);

  const next = () => setIndex((current) => (current + 1 + Math.floor(Math.random() * (ideas.length - 1))) % ideas.length);
  const toggleSaved = () => setSaved((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);

  return h("main", null,
    h("nav", { className: "nav" },
      h("a", { className: "brand", href: "#top", "aria-label": "MauMau — главная" }, "MAU", h("span", null, "MAU")),
      h("div", { className: "nav-note" }, h("span", { className: "dot" }), "маленькие приключения"),
      h("a", { className: "nav-link", href: "#generator" }, "Попробовать", h("span", null, "↘"))
    ),
    h("section", { className: "hero", id: "top" },
      h("div", { className: "eyebrow" }, "Для тех, кому хочется чего-то нового"),
      h("h1", null, "Один день.", h("br"), h("em", null, "Одна идея.")),
      h("p", { className: "lead" }, "MauMau подбрасывает простые творческие задания, которые вытаскивают из рутины. Без регистрации, планов и давления."),
      h("a", { className: "hero-button", href: "#generator" }, "Получить идею", h("span", null, "↓")),
      h("div", { className: "orbit orbit-one" }, "✦"),
      h("div", { className: "orbit orbit-two" }, "☺")
    ),
    h("section", { className: "generator", id: "generator" },
      h("div", { className: "section-head" },
        h("span", null, "Твоя идея на сегодня"),
        h("span", null, String(index + 1).padStart(2, "0"), " / ", String(ideas.length).padStart(2, "0"))
      ),
      h("article", { className: `idea-card ${idea.color}`, key: index },
        h("div", { className: "idea-icon" }, idea.icon),
        h("div", { className: "idea-copy" }, h("h2", null, idea.title), h("p", null, idea.text)),
        h("button", { className: `save ${saved.includes(index) ? "active" : ""}`, onClick: toggleSaved, "aria-label": "Сохранить идею" }, saved.includes(index) ? "♥" : "♡")
      ),
      h("div", { className: "actions" },
        h("button", { className: "next", onClick: next }, "Другая идея", h("span", null, "↻")),
        h("p", null, saved.length ? `Сохранено идей: ${saved.length}` : "Нажимай, пока не ёкнет")
      )
    ),
    h("section", { className: "manifesto" },
      h("p", null, "Не каждый день должен быть", h("br"), h("strong", null, "продуктивным.")),
      h("div", null, "Иногда достаточно сделать что-то просто из любопытства. MauMau — маленькое разрешение играть, ошибаться и замечать жизнь вокруг."),
      h("span", { className: "scribble" }, "будь любопытнее →")
    ),
    h("footer", null,
      h("a", { className: "brand footer-brand", href: "#top" }, "MAU", h("span", null, "MAU")),
      h("p", null, "Сделано с любопытством и React."),
      h("a", { href: "https://github.com/trgrnw/maumau", target: "_blank", rel: "noreferrer" }, "GitHub ↗")
    )
  );
}

createRoot(document.getElementById("root")).render(h(App));
