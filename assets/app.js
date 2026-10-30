(function () {
  const C = window.CT.company;
  const page = document.body.dataset.page || '';
  const img = n => `img/${n}.jpg`;

  // ---------- header (kiểu PCL: trong suốt trên hero, menu có mũi tên, bảng thả xuống toàn chiều ngang) ----------
  const ico = {
    chev: '<svg class="chev" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4l4 4 4-4"/></svg>',
    search: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="10" r="7"/><path d="M15 15l6 6"/></svg>',
  };
  // [khoá, nhãn, link, mô tả, [[mục, link, mô tả]], [[ảnh nổi bật, nhãn, link]]]
  const menu = [
    ['linh-vuc', 'Lĩnh vực', 'kinh-nghiem.html#linh-vuc', 'Từ nhà ở xã hội cho công nhân khu công nghiệp đến khách sạn cao tầng – mỗi lĩnh vực có đội ngũ và quy trình riêng.', [
      ['Nhà ở xã hội', 'du-an.html', 'Chung cư cao tầng chi phí tối ưu, an toàn tuyệt đối'],
      ['Khu đô thị & thương mại', 'du-an.html', 'Hạ tầng, nhà phố, chung cư thương mại'],
      ['Khách sạn & dịch vụ', 'du-an.html', 'Khách sạn, công trình y tế – nghỉ dưỡng'],
      ['Phòng cháy chữa cháy', 'kinh-nghiem.html#linh-vuc', 'Thiết kế, lắp đặt, nghiệm thu, bảo trì hệ thống PCCC'],
    ], [['sc-01', 'Cát Tường Smart City Yên Phong', 'du-an-chi-tiet.html?id=cat-tuong-smart-city'], ['pccc-bom', 'Hệ thống PCCC đạt nghiệm thu 100%', 'kinh-nghiem.html#linh-vuc']]],
    ['dich-vu', 'Dịch vụ', 'nang-luc.html', 'Một đầu mối duy nhất cho toàn bộ vòng đời công trình – từ khảo sát, thi công đến bàn giao và bảo trì.', [
      ['Thi công xây dựng', 'nang-luc.html', 'Kết cấu, hoàn thiện, cơ điện'],
      ['Lắp đặt & bảo trì PCCC', 'kinh-nghiem.html#linh-vuc', 'Ứng cứu sự cố 24/7'],
      ['Quy trình thi công', 'kinh-nghiem.html#quy-trinh', 'Kiểm soát chất lượng 3 cấp'],
      ['Chất lượng & an toàn', 'kinh-nghiem.html#chat-luong', 'Không tai nạn lao động nghiêm trọng'],
      ['Máy móc thiết bị', 'nang-luc.html#thiet-bi', 'Cẩu tháp, vận thăng, thiết bị thi công'],
      ['Hồ sơ năng lực', 'nang-luc.html', 'Pháp lý, nhân sự, tài chính'],
    ], [['pccc-ky-su', 'Kỹ sư PCCC Cát Tường', 'kinh-nghiem.html#chat-luong'], ['yp-ct1', 'Công trường không ngủ', 'tien-do.html']]],
    ['du-an', 'Dự án', 'du-an.html'],
    ['tien-do', 'Tiến độ', 'tien-do.html'],
    ['gioi-thieu', 'Về chúng tôi', 'gioi-thieu.html', 'Từ một phòng ban nhỏ năm 2013 đến đơn vị thi công của Cát Tường Group – hành trình của chữ Tâm và chữ Tín.', [
      ['Câu chuyện hình thành', 'gioi-thieu.html#cau-chuyen', '2013 → 2026'],
      ['Thư ngỏ', 'gioi-thieu.html#thu-ngo', 'Lời từ Ban Giám đốc'],
      ['Sứ mệnh & giá trị cốt lõi', 'gioi-thieu.html#gia-tri', 'Tâm – Tín – Trí – Tốc – Nhân – Tinh'],
      ['Kinh nghiệm', 'kinh-nghiem.html', 'Lĩnh vực chuyên sâu & hỏi đáp'],
    ], [['ttg-2', 'Thủ tướng thăm công trường', 'gioi-thieu.html#cau-chuyen'], ['new-pc', 'Cát Tường New – trụ sở', 'du-an-chi-tiet.html?id=cat-tuong-new']]],
    ['tin-tuc', 'Tin tức', 'tin-tuc.html'],
    ['tuyen-dung', 'Tuyển dụng', 'tuyen-dung.html', 'Ở Cát Tường, "anh chị em một nhà, anh chị em chiến hữu, cùng làm cùng chơi".', [
      ['Vì sao chọn Cát Tường', 'tuyen-dung.html#vi-sao', 'Môi trường nhân văn, thu nhập cạnh tranh'],
      ['Vị trí đang tuyển', 'tuyen-dung.html#vi-tri', 'Kỹ sư, thợ lành nghề, sinh viên'],
      ['Đời sống Cát Tường', 'tuyen-dung.html#doi-song', 'Học tập, thể thao, thiện nguyện'],
      ['Ứng tuyển', 'tuyen-dung.html#ung-tuyen', 'Gửi hồ sơ trực tuyến'],
    ], [['team-1', 'Đội ngũ nhân viên', 'tuyen-dung.html#doi-song'], ['career-1', 'Văn hoá học tập', 'tuyen-dung.html#doi-song']]],
  ];
  const isOn = k => k === page || (k === 'gioi-thieu' && page === 'kinh-nghiem') || (k === 'du-an' && page === 'du-an-chi-tiet') || (k === 'tin-tuc' && page === 'tin-tuc-chi-tiet');
  const hdr = document.createElement('header');
  hdr.className = 'hdr' + (document.body.dataset.solid ? ' light' : '');
  hdr.innerHTML = `<a class="skip" href="#main">Bỏ qua đến nội dung</a>
  <div class="wrap hdr-in">
    <a class="brand" href="index.html" aria-label="Xây lắp Cát Tường – Trang chủ"><img class="lg-c" src="img/logo.png" alt=""><img class="lg-w" src="img/logo-white.png" alt=""><span>XÂY LẮP<br>CÁT TƯỜNG</span></a>
    <ul class="nav" id="nav">
      ${menu.map(([k, t, h, d, sub, spot]) => `<li class="${sub ? 'has' : ''}"><a href="${h}" class="${isOn(k) ? 'on' : ''}">${t}${sub ? ico.chev : ''}</a>${sub ? `
        <div class="drop"><div class="wrap drop-in">
          <div class="d-intro"><h3>${t}</h3><p>${d}</p><a class="arr" href="${h}">Xem tất cả</a></div>
          <ul class="d-links">${sub.map(([a, b, c]) => `<li><a href="${b}"><b>${a}</b><small>${c}</small></a></li>`).join('')}</ul>
          <div class="d-spot">${spot.map(([im, a, b]) => `<a href="${b}"><img src="${img(im)}" alt="" loading="lazy"><span>${a}</span></a>`).join('')}</div>
        </div></div>` : ''}</li>`).join('')}
    </ul>
    <div class="icons">
      <a class="region" href="tel:${C.phoneRaw}">${C.phone}</a>
      <button class="search" aria-label="Tìm kiếm"><span>Tìm kiếm</span>${ico.search}</button>
      <button class="burger" aria-label="Mở menu"><span></span><span></span><span></span></button>
    </div>
  </div>`;
  document.body.prepend(hdr);
  hdr.addEventListener('mouseenter', () => hdr.classList.add('hov'));
  hdr.addEventListener('mouseleave', () => hdr.classList.remove('hov'));

  // menu điện thoại (thả xuống, mục con dạng accordion)
  const mn = document.createElement('div');
  mn.className = 'meganav'; mn.setAttribute('aria-label', 'Menu');
  mn.innerHTML = `<ul>${menu.map(([k, t, h, d, sub]) => sub
    ? `<li><details><summary>${t}${ico.chev}</summary><ul><li><a href="${h}">Tổng quan</a></li>${sub.map(([a, b]) => `<li><a href="${b}">${a}</a></li>`).join('')}</ul></details></li>`
    : `<li><a href="${h}">${t}</a></li>`).join('')}</ul>
    <div class="m-cta"><b>Sẵn sàng hợp tác?</b><a class="btn btn-p" href="lien-he.html">Liên hệ với chúng tôi</a><a href="tel:${C.phoneRaw}">${C.phone}</a></div>`;
  document.body.append(mn);
  const toggleMenu = on => { document.body.classList.toggle('menu-open', on); hdr.querySelector('.burger').setAttribute('aria-label', on ? 'Đóng menu' : 'Mở menu'); };
  hdr.querySelector('.burger').onclick = () => toggleMenu(!document.body.classList.contains('menu-open'));
  mn.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  // ô tìm kiếm phủ màn hình: dự án, tin tức, các trang
  const pages = [['Giới thiệu', 'gioi-thieu.html'], ['Năng lực', 'nang-luc.html'], ['Kinh nghiệm', 'kinh-nghiem.html'], ['Tiến độ công trình', 'tien-do.html'], ['Tuyển dụng', 'tuyen-dung.html'], ['Liên hệ', 'lien-he.html']];
  const sx = document.createElement('div');
  sx.className = 'srch';
  sx.innerHTML = `<div class="wrap"><button class="x" aria-label="Đóng">×</button><label for="sq">Bạn đang tìm gì?</label><input id="sq" type="search" placeholder="Nhập tên dự án, tin tức…" autocomplete="off">
    <div class="rec"><small>Gợi ý</small>${['Nhà ở xã hội', 'PCCC', 'Smart City', 'Bàn giao'].map(t => `<button>${t}</button>`).join('')}</div><ul class="res"></ul></div>`;
  document.body.append(sx);
  const q = sx.querySelector('input'), res = sx.querySelector('.res');
  const fold = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase();
  const doSearch = () => {
    const k = fold(q.value.trim()); if (!k) { res.innerHTML = ''; return; }
    const P = window.CT.projects.map(p => ['Dự án', p.name, `du-an-chi-tiet.html?id=${p.id}`, p.type + ' ' + p.location + ' ' + p.summary]);
    const N = (window.CT.news || []).map(n => ['Tin tức', n.title, `tin-tuc-chi-tiet.html?id=${n.id}`, n.tag + ' ' + n.summary]);
    const G = pages.map(([t, h]) => ['Trang', t, h, '']);
    const hits = [...P, ...N, ...G].filter(r => fold(r[1] + ' ' + r[3]).includes(k)).slice(0, 12);
    res.innerHTML = hits.length ? hits.map(([c, t, h]) => `<li><a href="${h}"><small>${c}</small>${t}</a></li>`).join('') : '<li class="none">Không tìm thấy kết quả phù hợp.</li>';
  };
  q.addEventListener('input', doSearch);
  sx.querySelectorAll('.rec button').forEach(b => b.onclick = () => { q.value = b.textContent; doSearch(); });
  const toggleSearch = on => { sx.classList.toggle('on', on); if (on) setTimeout(() => q.focus(), 50); };
  hdr.querySelector('.search').onclick = () => toggleSearch(true);
  sx.querySelector('.x').onclick = () => toggleSearch(false);
  addEventListener('keydown', e => { if (e.key === 'Escape') { toggleMenu(false); toggleSearch(false); } });

  // header ẩn khi cuộn xuống, hiện nền trắng khi cuộn lên
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    hdr.classList.toggle('solid', y > 80);
    const hide = y > 400 && y > lastY && !document.body.classList.contains('menu-open');
    hdr.classList.toggle('hide', hide);
    document.body.classList.toggle('hdr-up', y > 80 && !hide);
    lastY = y;
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // bảng → dạng thẻ trên điện thoại: gắn nhãn cột cho từng ô
  window.ctLabelTables = () => document.querySelectorAll('table.tbl').forEach(t => {
    const hs = [...t.querySelectorAll('thead th')].map(th => th.textContent.trim());
    const ti = hs[0] === 'STT' ? 1 : 0;
    t.querySelectorAll('tbody tr').forEach(tr => [...tr.children].forEach((td, i) => { td.dataset.l = hs[i] || ''; if (i === ti) td.classList.add('tt'); if (i < ti) td.classList.add('stt'); }));
  });
  ctLabelTables();

  // ---------- chân trang: "Sẵn sàng hợp tác?" + đăng ký bản tin + footer ----------
  const tri = (cls) => `<svg class="${cls}" viewBox="0 0 400 300" aria-hidden="true"><path d="M0 300L160 0h0v300z" fill="#FDE3A0"/><path d="M160 0l160 150H160z" fill="#FBCB4A"/><path d="M160 150h160L160 300z" fill="#F8B810"/><path d="M320 0h80v60z" fill="#F8B810"/><path d="M320 0l80 60v60z" fill="#0A4A8C"/></svg>`;
  window.ctTri = tri;
  const pf = document.createElement('section');
  pf.className = 'pf';
  pf.innerHTML = `${tri('pf-tri')}<div class="wrap"><h2>Sẵn sàng hợp tác cùng chúng tôi?</h2>
    <p>Dù bạn đang có một dự án cần một đơn vị thi công đáng tin cậy, hay đang tìm bước tiếp theo trong sự nghiệp – chúng tôi luôn muốn được lắng nghe bạn.</p>
    <div class="btns"><a class="btn btn-p" href="lien-he.html">Cùng xây dựng dự án</a><a class="btn" href="tuyen-dung.html">Cùng xây dựng sự nghiệp</a></div></div>`;
  const sb = document.createElement('section');
  sb.className = 'subs';
  sb.innerHTML = `<div class="wrap"><div><h3>Nhận tin tức công trường qua email</h3><p>Đăng ký để nhận thông tin mới nhất về tiến độ dự án, bàn giao và tuyển dụng của Xây lắp Cát Tường.</p></div>
    <form><input type="email" required placeholder="Nhập email của bạn" aria-label="Email"><button class="btn">Đăng ký</button></form></div>`;
  sb.querySelector('form').onsubmit = e => {
    e.preventDefault();
    const m = sb.querySelector('input').value;
    location.href = `mailto:${C.email}?subject=${encodeURIComponent('Đăng ký nhận tin – ' + m)}&body=${encodeURIComponent('Tôi muốn đăng ký nhận tin tức từ Xây lắp Cát Tường. Email: ' + m)}`;
  };
  const soc = [
    ['Zalo', `https://zalo.me/${C.phoneRaw}`, '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 5.9 2 10.7c0 2.7 1.4 5.1 3.7 6.7L5 21l3.9-2.1c1 .3 2 .4 3.1.4 5.5 0 10-3.9 10-8.6S17.5 2 12 2zM7 13.5H5.6V8h1.1v4.5H9v1H7zm3.4 0h-1V10h1v3.5zm-.5-4.3a.6.6 0 110-1.2.6.6 0 010 1.2zm4.9 4.3h-1v-.4a1.7 1.7 0 11-.1-2.9V10h1.1v3.5zm3.6-1.7a1.8 1.8 0 11-3.6 0 1.8 1.8 0 013.6 0z"/></svg>'],
    ['Điện thoại', `tel:${C.phoneRaw}`, '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg>'],
    ['Email', `mailto:${C.email}`, '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4a2 2 0 00-2 2v12c0 1.1.9 2 2 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z"/></svg>'],
    ['Website Cát Tường Group', C.web, '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.9 6h-2.9a15.7 15.7 0 00-1.4-3.6A8 8 0 0118.9 8zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.4 1.1-2.8 1.9-4zM4.3 14a8 8 0 010-4h3.4a16.5 16.5 0 000 4zm.8 2h2.9c.3 1.3.8 2.5 1.4 3.6A8 8 0 015.1 16zM8 8H5.1a8 8 0 014.3-3.6C8.8 5.5 8.3 6.7 8 8zm4 12c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.4-1.1 2.8-1.9 4zm2.3-6H9.7a14.7 14.7 0 010-4h4.6a14.7 14.7 0 010 4zm.3 5.6c.6-1.1 1.1-2.3 1.4-3.6h2.9a8 8 0 01-4.3 3.6zm1.7-5.6a16.5 16.5 0 000-4h3.4a8 8 0 010 4z"/></svg>'],
  ];
  const ftr = document.createElement('footer');
  ftr.className = 'ftr';
  ftr.innerHTML = `<div class="wrap">
    <div class="ft-top"><ul>${[['Liên hệ', 'lien-he.html'], ['Giới thiệu', 'gioi-thieu.html'], ['Hồ sơ năng lực', 'nang-luc.html'], ['Dự án', 'du-an.html'], ['Tiến độ', 'tien-do.html'], ['Tin tức', 'tin-tuc.html'], ['Tuyển dụng', 'tuyen-dung.html']].map(([t, h]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul>
      <div class="soc">${soc.map(([t, h, s]) => `<a href="${h}" aria-label="${t}" title="${t}"${h.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${s}</a>`).join('')}</div></div>
    <div class="ft-bot"><a class="ft-logo" href="index.html"><img src="img/logo.png" alt="Cát Tường"></a><span class="slogan-f">Cho đi điều bạn muốn</span>
      <div class="ft-info">${C.name} · MSDN ${C.mst}<br>${C.address}</div>
      <div class="copy">Bản quyền © ${new Date().getFullYear()} ${C.name}<span>Bảo lưu mọi quyền</span></div></div>
    <p class="note">Một số số liệu trên website là dữ liệu mẫu, đang được cập nhật.</p>
  </div>`;
  document.body.append(pf, sb, ftr);

  // ---------- reveal + progress bars + counters ----------
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('in');
    el.querySelectorAll('.bar i[data-w]').forEach(i => i.style.width = i.dataset.w + '%');
    if (el.matches('.bar i[data-w]')) el.style.width = el.dataset.w + '%';
    el.querySelectorAll('[data-count]').forEach(countUp);
    io.unobserve(el);
  }), { threshold: .15 });
  function countUp(el) {
    const end = parseFloat(el.dataset.count), dec = (el.dataset.count.split('.')[1] || '').length, t0 = performance.now();
    const step = t => { const p = Math.min(1, (t - t0) / 1600), v = end * (1 - Math.pow(1 - p, 3)); el.textContent = v.toLocaleString('vi-VN', { minimumFractionDigits: dec, maximumFractionDigits: dec }); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  window.ctObserve = root => (root || document).querySelectorAll('.rv,.bar i[data-w],.stats').forEach(el => io.observe(el));
  ctObserve();

  // ---------- carousel ----------
  document.querySelectorAll('.car').forEach(car => {
    const tr = car.querySelector('.car-track'), cnt = car.querySelector('.car-count');
    const w = () => (tr.children[0] ? tr.children[0].getBoundingClientRect().width : 400) + parseFloat(getComputedStyle(tr).columnGap || 32);
    car.querySelector('.pv').onclick = () => tr.scrollBy({ left: -w(), behavior: 'smooth' });
    car.querySelector('.nx').onclick = () => tr.scrollBy({ left: w(), behavior: 'smooth' });
    const upd = () => { const n = tr.children.length, vis = Math.max(1, Math.round(tr.clientWidth / w())), i = Math.round(tr.scrollLeft / w()) + 1, j = Math.min(n, i + vis - 1); cnt.textContent = vis > 1 ? `${i} – ${j} / ${n}` : `${i} / ${n}`; };
    addEventListener('resize', upd);
    tr.addEventListener('scroll', upd, { passive: true }); upd();
  });

  // ---------- tabs (timeline) ----------
  document.querySelectorAll('[data-tabs]').forEach(box => {
    const btns = box.querySelectorAll('.tl-years button'), panes = box.querySelectorAll('.tl-pane');
    btns.forEach((b, i) => b.onclick = () => { btns.forEach(x => x.classList.remove('on')); panes.forEach(x => x.classList.remove('on')); b.classList.add('on'); panes[i].classList.add('on'); });
  });

  // ---------- lightbox ----------
  const lb = document.createElement('div');
  lb.className = 'lb'; lb.innerHTML = '<img alt=""><p></p><button class="x" aria-label="Đóng">×</button><button class="pv" aria-label="Ảnh trước">‹</button><button class="nx" aria-label="Ảnh sau">›</button>';
  document.body.append(lb);
  let set = [], idx = 0;
  const show = () => { lb.querySelector('img').src = set[idx].href; lb.querySelector('p').textContent = set[idx].dataset.cap || ''; };
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-lb]'); if (!a) return;
    e.preventDefault(); set = [...document.querySelectorAll(`[data-lb="${a.dataset.lb}"]`)]; idx = set.indexOf(a); show(); lb.classList.add('on');
  });
  lb.querySelector('.x').onclick = () => lb.classList.remove('on');
  lb.onclick = e => { if (e.target === lb) lb.classList.remove('on'); };
  lb.querySelector('.pv').onclick = () => { idx = (idx - 1 + set.length) % set.length; show(); };
  lb.querySelector('.nx').onclick = () => { idx = (idx + 1) % set.length; show(); };
  addEventListener('keydown', e => { if (!lb.classList.contains('on')) return; if (e.key === 'Escape') lb.classList.remove('on'); if (e.key === 'ArrowLeft') lb.querySelector('.pv').click(); if (e.key === 'ArrowRight') lb.querySelector('.nx').click(); });

  // ---------- subnav active ----------
  const sn = document.querySelector('.subnav');
  if (sn) {
    const links = [...sn.querySelectorAll('a')], secs = links.map(a => document.querySelector(a.getAttribute('href')));
    addEventListener('scroll', () => { let k = 0; secs.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 180) k = i; }); links.forEach((a, i) => a.classList.toggle('on', i === k)); }, { passive: true });
  }

  // helpers for pages
  window.ctImg = img;
  window.ctStatus = s => ({ done: ['done', 'Đã hoàn thành'], run: ['run', 'Đang thi công'], plan: ['plan', 'Chuẩn bị triển khai'] }[s]);
  window.ctCard = p => { const [c, t] = ctStatus(p.status); return `<a class="pc rv" href="du-an-chi-tiet.html?id=${p.id}"><img src="${img(p.cover)}" alt="${p.name}" loading="lazy"><span class="tag ${c}" style="position:absolute;left:24px;top:24px;z-index:2">${t}${p.status === 'run' ? ' · ' + p.progress + '%' : ''}</span><div class="t"><small>${p.location}</small><h3>${p.name}</h3><span class="more">Xem dự án</span></div></a>`; };
})();
