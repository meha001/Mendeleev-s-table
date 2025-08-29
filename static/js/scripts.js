/* полная таблица элементов (Z, sym, name, x=group 1..18, y=period 1..7, cat, amu)
   Упрощённые англ. имена — можно заменить на русские при желании. */
const ELEMENTS = [
  { Z: 1, sym: "H", name: "Водород", x: 1, y: 1, cat: "nonmetal", amu: 1.008 },
  { Z: 2, sym: "He", name: "Гелий", x: 18, y: 1, cat: "noble", amu: 4.0026 },
  { Z: 3, sym: "Li", name: "Литий", x: 1, y: 2, cat: "alkali", amu: 6.94 },
  { Z: 4, sym: "Be", name: "Бериллий", x: 2, y: 2, cat: "alkaline", amu: 9.0122 },
  { Z: 5, sym: "B", name: "Бор", x: 13, y: 2, cat: "metalloid", amu: 10.81 },
  { Z: 6, sym: "C", name: "Углерод", x: 14, y: 2, cat: "nonmetal", amu: 12.011 },
  { Z: 7, sym: "N", name: "Азот", x: 15, y: 2, cat: "nonmetal", amu: 14.007 },
  { Z: 8, sym: "O", name: "Кислород", x: 16, y: 2, cat: "nonmetal", amu: 15.999 },
  { Z: 9, sym: "F", name: "Фтор", x: 17, y: 2, cat: "halogen", amu: 18.998 },
  { Z: 10, sym: "Ne", name: "Неон", x: 18, y: 2, cat: "noble", amu: 20.180 },
  { Z: 11, sym: "Na", name: "Натрий", x: 1, y: 3, cat: "alkali", amu: 22.990 },
  { Z: 12, sym: "Mg", name: "Магний", x: 2, y: 3, cat: "alkaline", amu: 24.305 },
  { Z: 13, sym: "Al", name: "Алюминий", x: 13, y: 3, cat: "post", amu: 26.982 },
  { Z: 14, sym: "Si", name: "Кремний", x: 14, y: 3, cat: "metalloid", amu: 28.085 },
  { Z: 15, sym: "P", name: "Фосфор", x: 15, y: 3, cat: "nonmetal", amu: 30.974 },
  { Z: 16, sym: "S", name: "Сера", x: 16, y: 3, cat: "nonmetal", amu: 32.06 },
  { Z: 17, sym: "Cl", name: "Хлор", x: 17, y: 3, cat: "halogen", amu: 35.45 },
  { Z: 18, sym: "Ar", name: "Аргон", x: 18, y: 3, cat: "noble", amu: 39.948 },
  { Z: 19, sym: "K", name: "Калий", x: 1, y: 4, cat: "alkali", amu: 39.098 },
  { Z: 20, sym: "Ca", name: "Кальций", x: 2, y: 4, cat: "alkaline", amu: 40.078 },
  { Z: 21, sym: "Sc", name: "Скандий", x: 3, y: 4, cat: "transition", amu: 44.956 },
  { Z: 22, sym: "Ti", name: "Титан", x: 4, y: 4, cat: "transition", amu: 47.867 },
  { Z: 23, sym: "V", name: "Ванадий", x: 5, y: 4, cat: "transition", amu: 50.942 },
  { Z: 24, sym: "Cr", name: "Хром", x: 6, y: 4, cat: "transition", amu: 51.996 },
  { Z: 25, sym: "Mn", name: "Марганец", x: 7, y: 4, cat: "transition", amu: 54.938 },
  { Z: 26, sym: "Fe", name: "Железо", x: 8, y: 4, cat: "transition", amu: 55.845 },
  { Z: 27, sym: "Co", name: "Кобальт", x: 9, y: 4, cat: "transition", amu: 58.933 },
  { Z: 28, sym: "Ni", name: "Никель", x: 10, y: 4, cat: "transition", amu: 58.693 },
  { Z: 29, sym: "Cu", name: "Медь", x: 11, y: 4, cat: "transition", amu: 63.546 },
  { Z: 30, sym: "Zn", name: "Цинк", x: 12, y: 4, cat: "transition", amu: 65.38 },
  { Z: 31, sym: "Ga", name: "Галлий", x: 13, y: 4, cat: "post", amu: 69.723 },
  { Z: 32, sym: "Ge", name: "Германий", x: 14, y: 4, cat: "metalloid", amu: 72.630 },
  { Z: 33, sym: "As", name: "Мышьяк", x: 15, y: 4, cat: "metalloid", amu: 74.922 },
  { Z: 34, sym: "Se", name: "Селен", x: 16, y: 4, cat: "nonmetal", amu: 78.971 },
  { Z: 35, sym: "Br", name: "Бром", x: 17, y: 4, cat: "halogen", amu: 79.904 },
  { Z: 36, sym: "Kr", name: "Криптон", x: 18, y: 4, cat: "noble", amu: 83.798 },
  { Z: 37, sym: "Rb", name: "Рубидий", x: 1, y: 5, cat: "alkali", amu: 85.468 },
  { Z: 38, sym: "Sr", name: "Стронций", x: 2, y: 5, cat: "alkaline", amu: 87.62 },
  { Z: 39, sym: "Y", name: "Иттрий", x: 3, y: 5, cat: "transition", amu: 88.906 },
  { Z: 40, sym: "Zr", name: "Цирконий", x: 4, y: 5, cat: "transition", amu: 91.224 },
  { Z: 41, sym: "Nb", name: "Ниобий", x: 5, y: 5, cat: "transition", amu: 92.906 },
  { Z: 42, sym: "Mo", name: "Молибден", x: 6, y: 5, cat: "transition", amu: 95.95 },
  { Z: 43, sym: "Tc", name: "Технеций", x: 7, y: 5, cat: "transition", amu: 98 },
  { Z: 44, sym: "Ru", name: "Рутений", x: 8, y: 5, cat: "transition", amu: 101.07 },
  { Z: 45, sym: "Rh", name: "Родий", x: 9, y: 5, cat: "transition", amu: 102.91 },
  { Z: 46, sym: "Pd", name: "Палладий", x: 10, y: 5, cat: "transition", amu: 106.42 },
  { Z: 47, sym: "Ag", name: "Серебро", x: 11, y: 5, cat: "transition", amu: 107.87 },
  { Z: 48, sym: "Cd", name: "Кадмий", x: 12, y: 5, cat: "transition", amu: 112.41 },
  { Z: 49, sym: "In", name: "Индий", x: 13, y: 5, cat: "post", amu: 114.82 },
  { Z: 50, sym: "Sn", name: "Олово", x: 14, y: 5, cat: "post", amu: 118.71 },
  { Z: 51, sym: "Sb", name: "Сурьма", x: 15, y: 5, cat: "metalloid", amu: 121.76 },
  { Z: 52, sym: "Te", name: "Теллур", x: 16, y: 5, cat: "metalloid", amu: 127.60 },
  { Z: 53, sym: "I", name: "Иод", x: 17, y: 5, cat: "halogen", amu: 126.90 },
  { Z: 54, sym: "Xe", name: "Ксенон", x: 18, y: 5, cat: "noble", amu: 131.29 },
  { Z: 55, sym: "Cs", name: "Цезий", x: 1, y: 6, cat: "alkali", amu: 132.91 },
  { Z: 56, sym: "Ba", name: "Барий", x: 2, y: 6, cat: "alkaline", amu: 137.33 },
  { Z: 57, sym: "La", name: "Лантан", x: 3, y: 6, cat: "lanth", amu: 138.91 },
  { Z: 58, sym: "Ce", name: "Церий", x: 4, y: 8, cat: "lanth", amu: 140.12 },
  { Z: 59, sym: "Pr", name: "Празеодим", x: 5, y: 8, cat: "lanth", amu: 140.91 },
  { Z: 60, sym: "Nd", name: "Неодим", x: 6, y: 8, cat: "lanth", amu: 144.24 },
  { Z: 61, sym: "Pm", name: "Прометий", x: 7, y: 8, cat: "lanth", amu: 145 },
  { Z: 62, sym: "Sm", name: "Самарий", x: 8, y: 8, cat: "lanth", amu: 150.36 },
  { Z: 63, sym: "Eu", name: "Европий", x: 9, y: 8, cat: "lanth", amu: 151.96 },
  { Z: 64, sym: "Gd", name: "Гадолиний", x: 10, y: 8, cat: "lanth", amu: 157.25 },
  { Z: 65, sym: "Tb", name: "Тербий", x: 11, y: 8, cat: "lanth", amu: 158.93 },
  { Z: 66, sym: "Dy", name: "Диспрозий", x: 12, y: 8, cat: "lanth", amu: 162.50 },
  { Z: 67, sym: "Ho", name: "Гольмий", x: 13, y: 8, cat: "lanth", amu: 164.93 },
  { Z: 68, sym: "Er", name: "Эрбий", x: 14, y: 8, cat: "lanth", amu: 167.26 },
  { Z: 69, sym: "Tm", name: "Тулий", x: 15, y: 8, cat: "lanth", amu: 168.93 },
  { Z: 70, sym: "Yb", name: "Иттербий", x: 16, y: 8, cat: "lanth", amu: 173.05 },
  { Z: 71, sym: "Lu", name: "Лютеций", x: 17, y: 8, cat: "lanth", amu: 174.97 },
  { Z: 72, sym: "Hf", name: "Гафний", x: 4, y: 6, cat: "transition", amu: 178.49 },
  { Z: 73, sym: "Ta", name: "Тантал", x: 5, y: 6, cat: "transition", amu: 180.95 },
  { Z: 74, sym: "W", name: "Вольфрам", x: 6, y: 6, cat: "transition", amu: 183.84 },
  { Z: 75, sym: "Re", name: "Рений", x: 7, y: 6, cat: "transition", amu: 186.21 },
  { Z: 76, sym: "Os", name: "Осмий", x: 8, y: 6, cat: "transition", amu: 190.23 },
  { Z: 77, sym: "Ir", name: "Иридий", x: 9, y: 6, cat: "transition", amu: 192.22 },
  { Z: 78, sym: "Pt", name: "Платина", x: 10, y: 6, cat: "transition", amu: 195.08 },
  { Z: 79, sym: "Au", name: "Золото", x: 11, y: 6, cat: "transition", amu: 196.97 },
  { Z: 80, sym: "Hg", name: "Ртуть", x: 12, y: 6, cat: "transition", amu: 200.59 },
  { Z: 81, sym: "Tl", name: "Таллий", x: 13, y: 6, cat: "post", amu: 204.38 },
  { Z: 82, sym: "Pb", name: "Свинец", x: 14, y: 6, cat: "post", amu: 207.2 },
  { Z: 83, sym: "Bi", name: "Висмут", x: 15, y: 6, cat: "post", amu: 208.98 },
  { Z: 84, sym: "Po", name: "Полоний", x: 16, y: 6, cat: "post", amu: 209 },
  { Z: 85, sym: "At", name: "Астат", x: 17, y: 6, cat: "halogen", amu: 210 },
  { Z: 86, sym: "Rn", name: "Радон", x: 18, y: 6, cat: "noble", amu: 222 },
  { Z: 87, sym: "Fr", name: "Франций", x: 1, y: 7, cat: "alkali", amu: 223 },
  { Z: 88, sym: "Ra", name: "Радий", x: 2, y: 7, cat: "alkaline", amu: 226 },
  { Z: 89, sym: "Ac", name: "Актиний", x: 3, y: 7, cat: "actin", amu: 227 },
  { Z: 90, sym: "Th", name: "Торий", x: 4, y: 9, cat: "actin", amu: 232.04 },
  { Z: 91, sym: "Pa", name: "Протактиний", x: 5, y: 9, cat: "actin", amu: 231.04 },
  { Z: 92, sym: "U", name: "Уран", x: 6, y: 9, cat: "actin", amu: 238.03 },
  { Z: 93, sym: "Np", name: "Нептуний", x: 7, y: 9, cat: "actin", amu: 237 },
  { Z: 94, sym: "Pu", name: "Плутоний", x: 8, y: 9, cat: "actin", amu: 244 },
  { Z: 95, sym: "Am", name: "Америций", x: 9, y: 9, cat: "actin", amu: 243 },
  { Z: 96, sym: "Cm", name: "Кюрий", x: 10, y: 9, cat: "actin", amu: 247 },
  { Z: 97, sym: "Bk", name: "Берклий", x: 11, y: 9, cat: "actin", amu: 247 },
  { Z: 98, sym: "Cf", name: "Калифорний", x: 12, y: 9, cat: "actin", amu: 251 },

  { Z: 99, sym: "Es", name: "Эйнштейний", x: 13, y: 9, cat: "actin", amu: 252 },
  { Z: 100, sym: "Fm", name: "Фермий", x: 14, y: 9, cat: "actin", amu: 257 },
  { Z: 101, sym: "Md", name: "Менделевий", x: 15, y: 9, cat: "actin", amu: 258 },
  { Z: 102, sym: "No", name: "Нобелий", x: 16, y: 9, cat: "actin", amu: 259 },
  { Z: 103, sym: "Lr", name: "Лоуренсий", x: 17, y: 9, cat: "actin", amu: 266 },
  { Z: 104, sym: "Rf", name: "Резерфордий", x: 4, y: 7, cat: "transition", amu: 267 },
  { Z: 105, sym: "Db", name: "Дубний", x: 5, y: 7, cat: "transition", amu: 268 },
  { Z: 106, sym: "Sg", name: "Сиборгий", x: 6, y: 7, cat: "transition", amu: 269 },
  { Z: 107, sym: "Bh", name: "Борий", x: 7, y: 7, cat: "transition", amu: 270 },
  { Z: 108, sym: "Hs", name: "Хассий", x: 8, y: 7, cat: "transition", amu: 277 },
  { Z: 109, sym: "Mt", name: "Мейтнерий", x: 9, y: 7, cat: "unknown", amu: 278 },
  { Z: 110, sym: "Ds", name: "Дармштадтий", x: 10, y: 7, cat: "unknown", amu: 281 },
  { Z: 111, sym: "Rg", name: "Рентгений", x: 11, y: 7, cat: "unknown", amu: 282 },
  { Z: 112, sym: "Cn", name: "Коперниций", x: 12, y: 7, cat: "transition", amu: 285 },
  { Z: 113, sym: "Nh", name: "Нихоний", x: 13, y: 7, cat: "unknown", amu: 286 },
  { Z: 114, sym: "Fl", name: "Флеровий", x: 14, y: 7, cat: "post", amu: 289 },
  { Z: 115, sym: "Mc", name: "Московий", x: 15, y: 7, cat: "unknown", amu: 289 },
  { Z: 116, sym: "Lv", name: "Ливерморий", x: 16, y: 7, cat: "post", amu: 293 },
  { Z: 117, sym: "Ts", name: "Теннессин", x: 17, y: 7, cat: "halogen", amu: 294 },
  { Z: 118, sym: "Og", name: "Оганесон", x: 18, y: 7, cat: "noble", amu: 295 }
];

/* стили категорий для легенды и для ячеек */
const CAT_MAP = {
  alkali: { cls: 'cat-alkali', label: 's- Щелочной элемент' },
  alkaline: { cls: 'cat-alkaline', label: 's- Щёлочноземе́льные мета́ллы' },
  transition: { cls: 'cat-transition', label: 'd-переходный элемент' },
  post: { cls: 'cat-post', label: 'постпереходный период' },
  metalloid: { cls: 'cat-metalloid', label: 'металлоид' },
  nonmetal: { cls: 'cat-nonmetal', label: 'неметалл' },
  halogen: { cls: 'cat-halogen', label: 'галогены' },
  noble: { cls: 'cat-noble', label: 'благородный' },
  lanth: { cls: 'cat-lanth', label: 'лантаноиды' },
  actin: { cls: 'cat-actin', label: 'актин' },
  unknown: { cls: 'cat-unknown', label: 'неизвестный' }
};

const ptable = document.getElementById('ptable');
const details = document.getElementById('dcontent');
const q = document.getElementById('q');
const catFilter = document.getElementById('catFilter');
const legend = document.getElementById('legend');
const reset = document.getElementById('reset');

/* построим пустую сетку 7 периодов + 2 вынесенных ряда (ряда 8 и 9 разместим в строках 8 и 9) */
function initGrid() {
  // заполняем пустыми блоками, чтобы сетка занимала строки (необязательно)
  // (мы будем размещать элементы по gridColumnStart, gridRowStart)
  // Для визуального ряда лант/акт добавим подписи
  const labels = [
    { row: 8, text: '57–71 (Лантаниды)' },
    { row: 9, text: '89–103 (Актиниды)' }
  ];
  labels.forEach(l => {
    const div = document.createElement('div');
    div.className = 'row-label';
    div.style.gridRowStart = l.row;
    div.textContent = l.text;
    ptable.appendChild(div);
  });
}

/* отрисовка элементов */
function renderElements(list) {
  // очистка ячеек кроме row-label
  [...ptable.querySelectorAll('.cell')].forEach(n => n.remove());
  list.forEach(e => {
    const el = document.createElement('div');
    el.className = 'cell small ' + (CAT_MAP[e.cat]?.cls || 'cat-unknown');
    el.style.gridColumnStart = e.x;
    el.style.gridRowStart = e.y <= 7 ? e.y : (e.y === 8 ? 8 : 9); // lanth->row8, actin->row9
    el.dataset.z = e.Z;
    el.dataset.sym = e.sym.toLowerCase();
    el.dataset.name = e.name.toLowerCase();
    el.innerHTML = `<div class="z">${e.Z}</div><div class="sym">${e.sym}</div><div class="name">${e.name}</div>`;
    el.addEventListener('click', () => showDetails(e));
    ptable.appendChild(el);
  });
}

/* details */
/*function showDetails(e) {
  details.innerHTML = `
    <div style="font-weight:700;font-size:16px">${e.sym} — ${e.name}</div>
    <div style="margin-top:8px;color:${'#4b5563'}">Z: ${e.Z} • Атомная масса: ${e.amu} • Категория: ${CAT_MAP[e.cat]?.label || e.cat}</div>
    <div style="margin-top:8px">Группа: ${e.x} • Период: ${e.y <= 7 ? e.y : (e.y === 8 ? 'Лантаниды' : 'Актиниды')}</div>
  `;
}*/

//------------------------------





async function showDetails(e) {
  // Сначала показываем базовую информацию
  details.innerHTML = `
    <div style="font-weight:700;font-size:16px">${e.sym} — ${e.name}</div>
    <div style="margin-top:8px;color:#4b5563">Z: ${e.Z} • Атомная масса: ${e.amu} • Категория: ${CAT_MAP[e.cat]?.label || e.cat}</div>
    <div style="margin-top:8px">Группа: ${e.x} • Период: ${e.y <= 7 ? e.y : (e.y === 8 ? 'Лантаниды' : 'Актиниды')}</div>
    <div style="margin-top:12px;font-style:italic">Загрузка данных из Википедии...</div>
  `;

  try {
    // Получаем данные из Википедии
    const wikiData = await fetchWikipediaData(e.name);

    // Форматируем текст - убираем лишние переносы и скобки
    const cleanText = wikiData.extract
      .replace(/\n/g, ' ') // убираем переносы строк
      .replace(/\([^)]*\)/g, '') // убираем текст в скобках
      .substring(0, 1000); // ограничиваем длину

    // Обновляем информацию с данными из Википедии
    details.innerHTML = `
      <div style="font-weight:700;font-size:16px">${e.sym} — ${e.name}</div>
      <div style="margin-top:8px;color:#4b5563">Z: ${e.Z} • Атомная масса: ${e.amu} • Категория: ${CAT_MAP[e.cat]?.label || e.cat}</div>
      <div style="margin-top:8px">Группа: ${e.x} • Период: ${e.y <= 7 ? e.y : (e.y === 8 ? 'Лантаниды' : 'Актиниды')}</div>
      
      <div style="margin-top:16px;border-top:1px solid #e5e7eb;padding-top:12px">
        <div style="display:flex;gap:16px;align-items:flex-start">
          ${wikiData.thumbnail ? `
            <div style="flex-shrink:0">
              <img src="${wikiData.thumbnail.source}" 
                   style="width:200px;max-width:100%;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1)">
            </div>
          ` : ''}
          
          <div style="flex-grow:1">
            <div style="font-weight:600;margin-bottom:8px;font-size:18px">Описание элемента</div>
            <div style="font-size:15px;line-height:1.6;text-align:justify">${cleanText}</div>
            
            
          </div>
        </div>
      </div>
      
      <div style="margin-top:16px;padding:12px;background-color:#f8fafc;border-radius:6px;border-left:4px solid #3b82f6">
        <div style="font-weight:600;margin-bottom:6px">📚 Источник:</div>
        <a href="${wikiData.content_urls.desktop.page}" 
           target="_blank" 
           style="color:#3b82f6;text-decoration:none;font-size:14px">
          Читать полную статью на Wikipedia →
        </a>
      </div>
    `;

  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
    details.innerHTML += `
      <div style="margin-top:16px;padding:12px;background-color:#fef2f2;border-radius:6px;border-left:4px solid #ef4444">
        <div style="color:#ef4444;font-weight:600">⚠️ Не удалось загрузить данные из Википедии</div>
        <div style="font-size:14px;color:#6b7280;margin-top:4px">Попробуйте обновить страницу или check интернет-соединение</div>
      </div>
    `;
  }
}

// Функция для получения данных из Википедии
async function fetchWikipediaData(elementName) {


  const searchTerm = elementName;
  const url = `https://ru.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTerm)}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Ошибка HTTP: ' + response.status);
  }

  return await response.json();
}



//------------------------------



/* легенда и фильтры */
function buildLegendAndFilters() {
  // уникальные категории в данных (с сохранением порядка)
  const cats = [];
  ELEMENTS.forEach(e => { if (!cats.includes(e.cat)) cats.push(e.cat) });
  // заполняем селект категорий
  cats.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = CAT_MAP[c]?.label || c;
    catFilter.appendChild(opt);
  });
  // легенда
  for (const k in CAT_MAP) {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `<span class="sw ${CAT_MAP[k].cls}"></span><span style="color:var(--muted)">${CAT_MAP[k].label}</span>`;
    legend.appendChild(item);
  }
}

/* поиск + фильтр */
function applyFilter() {
  const val = q.value.trim().toLowerCase();
  const cat = catFilter.value;
  const allCells = [...ptable.querySelectorAll('.cell')];
  allCells.forEach(c => {
    const sym = c.dataset.sym;
    const name = c.dataset.name;
    const z = c.dataset.z;
    const el = ELEMENTS.find(e => String(e.Z) === z);
    const matchQ = !val || sym.includes(val) || name.includes(val) || z === val;
    const matchCat = !cat || el.cat === cat;
    c.classList.toggle('hidden', !(matchQ && matchCat));
  });
}

/* инициализация */
initGrid();
renderElements(ELEMENTS);
buildLegendAndFilters();
q.addEventListener('input', applyFilter);
catFilter.addEventListener('change', applyFilter);
reset.addEventListener('click', () => {
  q.value = ''; catFilter.value = '';
  applyFilter();
  details.innerHTML = 'Нажмите на элемент';
});

/* подсказка: при загрузке показать H */
document.addEventListener('DOMContentLoaded', () => showDetails(ELEMENTS[0]));