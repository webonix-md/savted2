(() => {
  const RO = document.documentElement.lang === 'ro';
  const T = (ru, ro) => (RO && ro ? ro : ru);

  /* ---------- данные проектов (тексты и фото с savted.md) ---------- */
  const W = [
    {id:13, f:'garden', ru:['Сад и беседка в Яловенах','Частный дом, Яловены'], ro:['Grădină și foișor în Ialoveni','Casă privată, Ialoveni'],
      d:['Минималистичный сад в духе камерного японского: гинкго, чёрная сосна, можжевельник, японский клён, рулонный газон. Беседка и бассейн — композиционный центр участка; на кровле беседки солнечные панели для подогрева воды. Сферические светильники смягчают прямые линии.',
         'Grădină minimalistă în spiritul unei grădini japoneze intime: ginkgo, pin negru, ienupăr, arțar japonez, gazon rulou. Foișorul și piscina sunt centrul compoziției; pe acoperișul foișorului sunt panouri solare pentru încălzirea apei. Corpurile de iluminat sferice îndulcesc liniile drepte.'],
      p:['bd1fc2fb','7c0b3475','029607f9','a948eccc','9daf2f67','4ce390ea','b1e82670','8960950a','eee87097','5f0ac22e']},
    {id:11, f:'art', ru:['Барельефы для клуба Aqua Terra','ООО «Аква-Терра»'], ro:['Basoreliefuri pentru clubul Aqua Terra','SRL „Aqua-Terra”'],
      d:['Барельефы и горельефы Будды и восточных божеств под бронзу, скульптура Будды Шакьямуни «из вулканической породы», имитация камня на стенах и колоннах бассейна. Декор в фойе, хамаме, массажных, у бассейнов и в ресторане клуба. Материалы влагостойкие и долговечные.',
         'Basoreliefuri și altoreliefuri cu Buddha și divinități orientale, imitație de bronz, sculptura lui Buddha Shakyamuni „din rocă vulcanică”, imitație de piatră pe pereții și coloanele piscinei. Decor în foaier, hammam, saloane de masaj, la piscine și în restaurant. Materiale rezistente la umiditate și durabile.'],
      a:'Юрий Пуздровский, Серж Ионов, Алексей Руденко',
      p:['cdaa45fe','8d88331a','b8670d88','4bfed34b','76ecb785','f75b0991','83f78e9e','d3d8c463','147f9ab5','6980c6fa']},
    {id:7, f:'art', ru:['Средиземноморский пейзаж','Роспись стены, частный интерьер'], ro:['Peisaj mediteranean','Pictură murală, interior privat'],
      d:['Роспись по сухой штукатурке акриловыми красками, 2,5 × 2,5 м. Неделя на эскизы и согласование, две недели на работу на стене.',
         'Pictură pe tencuială uscată cu vopsele acrilice, 2,5 × 2,5 m. O săptămână pentru schițe și aprobare, două săptămâni pentru lucrul pe perete.'],
      a:'Алексей Руденко',
      p:['23a6d902','eb0f8449','1214e06b','fe956758','e28b7612']},
    {id:15, f:'garden', ru:['Садовые беседки','Китайский стиль, кантри, этника'], ro:['Foișoare de grădină','Stil chinezesc, country, etnic'],
      d:['Беседки проектируем отдельно и в составе ландшафтных проектов. Плитка дымохода и мангала для китайской беседки создана по эскизам наших художников, ковка беседки-кантри — по нашим шаблонам. Сдаём фотореалистичную 3D-визуализацию и комплект рабочих чертежей.',
         'Proiectăm foișoare separat și în cadrul proiectelor de peisaj. Faianța coșului și a grătarului pentru foișorul chinezesc este creată după schițele artiștilor noștri, fierul forjat al foișorului country — după șabloanele noastre. Predăm vizualizare 3D fotorealistă și setul de desene de execuție.'],
      p:['4194f8a2','3f274304','a6d77f5b','2d854286','ee76a98a','fe1fccab','ba8b24ae','7e22a7fb','7a8128e4']},
    {id:12, f:'art', ru:['Молочный павильон Зелёного рынка','ООО «Центр-Маркет», Тирасполь'], ro:['Pavilionul lactatelor, Piața Verde','SRL „Centr-Market”, Tiraspol'],
      d:['Дизайн-проект павильона в стиле кантри, эскизы рельефных панно и кованых ограждений. Рельефные картины-натюрморты из полимерных гипсовых смесей расписаны акрилом и размещены по отделам торговли. На стройке — авторский надзор.',
         'Proiect de design al pavilionului în stil country, schițe de panouri în relief și garduri forjate. Tablourile-natură moartă în relief din amestecuri de gips polimeric sunt pictate cu acril și amplasate pe secții. Pe șantier — supraveghere de autor.'],
      a:'Серж Ионов, Алексей Руденко',
      p:['dbfcaeda','26b27bc4','c08e71c3','1e1432f2','4cd4a107','ea02d25a','f134516c','33e470c9','c08a815b']},
    {id:17, f:'garden', ru:['Парк Победы, Чадыр-Лунга','Реконструкция общественного парка, 2,5 га'], ro:['Parcul Victoriei, Ceadîr-Lunga','Reconstrucția unui parc public, 2,5 ha'],
      d:['Проект выиграл тендер и утверждён. Спроектированы дорожки, свет, детские и спортивные площадки, фонтаны, сцена летнего театра, мостик входа, пандус, клумбы и миксбордеры, составлены дендропланы. Проект получил финансирование, идёт реализация под нашим авторским надзором.',
         'Proiectul a câștigat licitația și este aprobat. Au fost proiectate alei, iluminat, terenuri de joacă și de sport, fântâni, scena teatrului de vară, podul de la intrare, rampă, straturi de flori și mixborduri, planuri dendrologice. Proiectul a primit finanțare, se realizează sub supravegherea noastră de autor.'],
      p:['71f379e6','6fe5074a','e12f5c0c','4d484ae9','34b51e8c','9f65899f','9cf6aedc','5825a18d','2a9e3d7d']},
    {id:9, f:'art', ru:['Винотека в этническом стиле','Частный клиент'], ro:['Vinotecă în stil etnic','Client privat'],
      d:['Интерьер на дереве с мебелью по индивидуальному дизайну. Барельефы с росписью в жанре австрийского пейзажа — по эскизам Сержа Ионова. Фасад расписан акрилом по сырой штукатурке: не боится погоды и не выгорает.',
         'Interior din lemn cu mobilier după design individual. Basoreliefuri pictate în genul peisajului austriac — după schițele lui Serj Ionov. Fațada este pictată cu acril pe tencuială umedă: rezistă la intemperii și nu se decolorează.'],
      a:'Серж Ионов',
      p:['c63c38e3','49c90498','365bd3c8','72f51e06','ff2bda66','87a295a4','e12ad243','2da1d36c']},
    {id:18, f:'garden', ru:['Мавританский сад','Дачный участок'], ro:['Grădină maură','Teren de vacanță'],
      d:['Восточный фонтан в обрамлении самшита — центр входной зоны. Перголы с вертикальным озеленением отделяют уголок отдыха от парковки, водопад связан с фонтаном декоративным каналом. Мозаика с испанскими мотивами, клинкер на дорожках. Вдохновлено садами Альгамбры.',
         'Fântâna orientală încadrată de cimișir este centrul zonei de intrare. Pergolele cu plante agățătoare separă colțul de odihnă de parcare, cascada e legată de fântână printr-un canal decorativ. Mozaic cu motive spaniole, clinker pe alei. Inspirat de grădinile Alhambrei.'],
      p:['6f9e890b','f79e3c37','2370cac4','331f94b3','2969c55e','b9ab838b','e6b23591','181a8868']},
    {id:10, f:'art', ru:['Мясной павильон Зелёного рынка','ООО «Центр-Маркет», Тирасполь'], ro:['Pavilionul cărnii, Piața Verde','SRL „Centr-Market”, Tiraspol'],
      d:['Интерьер в стиле кантри на дереве, роспись стен «а секко» акрилом и скульптурный декор из полимерного гипса — фигурки животных, окорока. Дизайн, роспись и авторский надзор — наши.',
         'Interior în stil country din lemn, pictură murală „a secco” cu acril și decor sculptural din gips polimeric — figurine de animale, jamboane. Designul, pictura și supravegherea de autor — ale noastre.'],
      a:'Серж Ионов, Алексей Руденко, Юрий Пуздровский',
      p:['290f59ae','839a7c34','92a1f9b6','9666e612','232b4288','59ed05b8','5b84686f','90e95daf']},
    {id:19, f:'garden', ru:['Комплексный ландшафт участка','Частный дом'], ro:['Amenajare complexă a terenului','Casă privată'],
      d:['Пейзажный и регулярный стиль вместе: планировка и террасирование, дорожки, свет и полив, посадочный чертёж, фасад забора, навес на три машины, беседка с мангально-печным комплексом, пруд с мостиком и водопадом, подпорные стенки.',
         'Stil peisager și regulat împreună: planificare și terasare, alei, iluminat și irigare, plan de plantare, fațada gardului, copertină pentru trei mașini, foișor cu complex de grătar și cuptor, iaz cu podeț și cascadă, ziduri de sprijin.'],
      p:['0da85908','187cdfd8','af8b39bd','8b706458','ac0564d0','940cb677','956a0d16','2e8ee3fc','af2123bf']},
    {id:8, f:'interior', ru:['Рыбный павильон Зелёного рынка','Торговая площадь, Тирасполь'], ro:['Pavilionul peștelui, Piața Verde','Spațiu comercial, Tiraspol'],
      d:['Интерьер в сказочной «морской» стилистике, основной материал — дерево. Стены оформлены авторскими фотографиями Натальи Чеботарь. На стройке — авторский надзор.',
         'Interior în stilistică „marină” de poveste, materialul principal — lemnul. Pereții sunt decorați cu fotografii de autor ale Nataliei Cebotari. Pe șantier — supraveghere de autor.'],
      a:'Серж Ионов, Алексей Руденко',
      p:['28350a17','439ff8e0','19bda51e','8a34a9bd','ca0f3af0','0c8b4bf4']},
    {id:16, f:'interior', ru:['Стройка и авторский надзор','Реализация наших проектов'], ro:['Construcție și supraveghere de autor','Realizarea proiectelor noastre'],
      d:['Следим, чтобы построенное совпадало с замыслом и рабочей документацией, решаем непредвиденное по ходу, согласуем изменения. Работы ведут подрядчики, с которыми мы сотрудничаем много лет.',
         'Urmărim ca ceea ce se construiește să corespundă ideii și documentației de execuție, rezolvăm neprevăzutul pe parcurs, coordonăm modificările. Lucrările sunt executate de antreprenori cu care colaborăm de mulți ani.'],
      p:['2973490f','06ae468c','4a9b5812','3c44fe85','dce717e2','67c2b7f4']},
  ];
  const AUTH = {ro:{'Юрий Пуздровский':'Iurii Puzdrovschi','Серж Ионов':'Serj Ionov','Алексей Руденко':'Alexei Rudenco'}};
  const authors = s => RO ? s.split(', ').map(n => AUTH.ro[n] || n).join(', ') : s;
  const pad = n => String(n).padStart(2, '0');
  const src = (h, s) => `img/w/${h}-${s}.webp`;

  /* ---------- сетка работ ---------- */
  const grid = document.querySelector('.js-grid');
  W.forEach((w, i) => {
    const t = RO ? w.ro : w.ru;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'card'; b.dataset.f = w.f; b.dataset.i = i;
    b.innerHTML = `<div class="card__img" data-n="${T('Смотреть','Vezi')} ${w.p.length} ${T('фото','foto')}"><img src="${src(w.p[0], 's')}" alt="${t[0]}" loading="lazy"></div>
      <div class="card__meta"><span class="card__num">${pad(i + 1)}</span><span class="card__t">${t[0]}</span><span class="card__c">${t[1]}</span></div>`;
    b.addEventListener('click', () => openLb(i));
    grid.appendChild(b);
  });

  const filters = document.querySelectorAll('.filters button');
  const setFilter = f => {
    filters.forEach(x => x.classList.toggle('is-on', x.dataset.f === f));
    grid.querySelectorAll('.card').forEach(c => {
      const hide = f !== 'all' && c.dataset.f !== f;
      c.classList.toggle('is-hidden', hide);
      if (!hide) { c.style.animation = 'none'; c.offsetHeight; c.style.animation = ''; }
    });
    layout();
  };
  // Раскладка по ВИДИМЫМ карточкам: размер задаётся местом в отфильтрованном списке,
  // а не номером среди всех работ — иначе после фильтра в сетке остаются дыры.
  // slot: 0 — широкая, 1 — средняя, 2–4 — узкие (на компьютере); m: 0 — на всю ширину (планшет).
  function layout() {
    const vis = [...grid.querySelectorAll('.card:not(.is-hidden)')];
    vis.forEach((c, v) => {
      c.dataset.slot = v % 5;
      // планшет: последняя карточка без пары растягивается на всю ширину
      c.dataset.m = v % 3 === 1 && v === vis.length - 1 ? 0 : v % 3;
      const img = c.querySelector('.card__img img'), w = W[+c.dataset.i];
      const want = src(w.p[0], v % 5 < 2 ? 'l' : 's');
      if (img.getAttribute('src') !== want) img.src = want;
    });
  }
  layout();
  filters.forEach(b => b.addEventListener('click', () => setFilter(b.dataset.f)));

  /* ---------- полоса направлений ---------- */
  const strip = document.querySelectorAll('.strip__item');
  const openStrip = el => strip.forEach(s => s.classList.toggle('is-open', s === el));
  const hoverable = matchMedia('(hover:hover) and (min-width:961px)');
  strip.forEach(s => {
    s.addEventListener('mouseenter', () => hoverable.matches && openStrip(s));
    s.addEventListener('click', e => {
      if (!s.classList.contains('is-open')) { e.preventDefault(); openStrip(s); return; }
      setFilter(s.dataset.filter);
    });
  });

  /* ---------- hero-слайдер ---------- */
  const slides = [...document.querySelectorAll('.slide')];
  const cur = document.querySelector('.js-cur');
  const capN = document.querySelector('.js-cap-n');
  let si = 0, timer;
  const byId = id => W.findIndex(w => w.id === +id);
  const show = n => {
    slides[si].classList.remove('is-on');
    si = (n + slides.length) % slides.length;
    const s = slides[si], img = s.querySelector('img');
    img.loading = 'eager';
    s.classList.add('is-on');
    cur.textContent = pad(si + 1);
    const w = W[byId(s.dataset.work)];
    capN.textContent = (RO ? w.ro : w.ru)[0];
    // подгрузить следующий заранее
    slides[(si + 1) % slides.length].querySelector('img').loading = 'eager';
  };
  const auto = () => { clearInterval(timer); timer = setInterval(() => show(si + 1), 6500); };
  document.querySelector('.js-prev').addEventListener('click', () => { show(si - 1); auto(); });
  document.querySelector('.js-next').addEventListener('click', () => { show(si + 1); auto(); });
  document.querySelector('.js-cap-open').addEventListener('click', () => openLb(byId(slides[si].dataset.work)));
  if (!matchMedia('(prefers-reduced-motion:reduce)').matches) auto();

  /* ---------- лайтбокс ---------- */
  const lb = document.querySelector('.lb');
  const lbImg = lb.querySelector('.lb__img');
  const thumbs = lb.querySelector('.lb__thumbs');
  let cw = null, ci = 0, lastFocus;
  const lbD = lb.querySelector('.lb__d'), lbFull = lb.querySelector('.lb__full'), lbMore = lb.querySelector('.lb__more');
  const setFull = on => {
    lbFull.hidden = !on; lbD.hidden = on;
    lbMore.setAttribute('aria-expanded', on);
    lbMore.textContent = on ? T('Свернуть', 'Restrânge') : T('Читать полностью', 'Citește tot');
  };
  lbMore.addEventListener('click', () => {
    const on = lbFull.hidden; setFull(on);
    if (!on) lb.querySelector('.lb__info').scrollTop = 0;
  });
  const setPhoto = n => {
    ci = (n + cw.p.length) % cw.p.length;
    lbImg.classList.add('is-loading');
    const im = new Image();
    im.onload = () => { lbImg.src = im.src; lbImg.classList.remove('is-loading'); };
    im.src = src(cw.p[ci], 'l');
    lbImg.alt = `${(RO ? cw.ro : cw.ru)[0]} — ${T('фото','foto')} ${ci + 1}`;
    lb.querySelector('.lb__cnt').textContent = `${pad(ci + 1)} / ${pad(cw.p.length)}`;
    thumbs.querySelectorAll('button').forEach((b, k) => b.classList.toggle('is-on', k === ci));
  };
  function openLb(i) {
    cw = W[i];
    const t = RO ? cw.ro : cw.ru;
    lb.querySelector('.lb__num').textContent = pad(i + 1);
    lb.querySelector('.lb__t').textContent = t[0];
    lb.querySelector('.lb__client').textContent = t[1];
    lb.querySelector('.lb__d').textContent = (RO ? cw.d[1] : cw.d[0]) + (cw.a ? ` ${T('Авторы','Autori')}: ${authors(cw.a)}.` : '');
    const full = (window.WORK_TEXT || {})[cw.id];
    const paras = full ? (RO ? full.ro : full.ru) : null;
    lbFull.innerHTML = paras ? paras.reduce((h, p) => {
      if (p.startsWith('- ')) return h.replace(/<\/ul>$/, '') + (h.endsWith('</ul>') ? '' : '<ul>') + `<li>${p.slice(2)}</li></ul>`;
      return h + `<p>${p}</p>`;
    }, '') : '';
    setFull(false);
    lbMore.hidden = !paras;
    thumbs.innerHTML = cw.p.map((h, k) => `<button type="button" aria-label="${T('Фото','Foto')} ${k + 1}"><img src="${src(h, 's')}" alt="" loading="lazy"></button>`).join('');
    thumbs.querySelectorAll('button').forEach((b, k) => b.addEventListener('click', () => setPhoto(k)));
    lastFocus = document.activeElement;
    lb.hidden = false; document.body.classList.add('lb-open');
    setPhoto(0);
    lb.querySelector('.lb__x').focus();
  }
  const closeLb = () => { lb.hidden = true; document.body.classList.remove('lb-open'); lastFocus && lastFocus.focus(); };
  lb.querySelector('.lb__x').addEventListener('click', closeLb);
  lb.querySelector('.lb__prev').addEventListener('click', () => setPhoto(ci - 1));
  lb.querySelector('.lb__next').addEventListener('click', () => setPhoto(ci + 1));
  lb.querySelector('.lb__cta').addEventListener('click', closeLb);
  lb.querySelector('.lb__stage').addEventListener('click', e => { if (e.target === e.currentTarget) closeLb(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') setPhoto(ci - 1);
    if (e.key === 'ArrowRight') setPhoto(ci + 1);
  });
  let tx = null;
  lbImg.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, {passive:true});
  lbImg.addEventListener('touchend', e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx; tx = null;
    if (Math.abs(dx) > 40) setPhoto(ci + (dx < 0 ? 1 : -1));
  });

  /* ---------- меню ---------- */
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('menu-open'); burger.setAttribute('aria-expanded', false);
  }));

  /* ---------- появление при прокрутке ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), {rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- форма → WhatsApp ---------- */
  const form = document.querySelector('.js-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    ['name', 'phone'].forEach(n => {
      const f = form.elements[n], bad = f.value.trim().length < (n === 'phone' ? 6 : 2);
      f.classList.toggle('is-err', bad); if (bad && ok) { f.focus(); ok = false; }
    });
    if (!ok) return;
    const v = n => form.elements[n].value.trim();
    const text = [T('Здравствуйте! Заявка с сайта SavTed.','Bună ziua! Cerere de pe site-ul SavTed.'),
      `${T('Имя','Nume')}: ${v('name')}`, `${T('Телефон','Telefon')}: ${v('phone')}`,
      `${T('Услуга','Serviciu')}: ${v('service')}`, v('msg') && `${T('Об объекте','Despre obiect')}: ${v('msg')}`].filter(Boolean).join('\n');
    window.open('https://wa.me/37369275775?text=' + encodeURIComponent(text), '_blank', 'noopener');
  });
})();
