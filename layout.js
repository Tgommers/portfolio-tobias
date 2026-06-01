@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap');

:root{
  --navy:#0a1a33;
  --navy-2:#102a52;
  --blue:#1e6fff;
  --orange:#ff5a1f;
  --ink:#10151f;
  --muted:#5b6776;
  --bg:#f4f6fb;
  --white:#ffffff;
  --line:#e6eaf2;
  --radius:16px;
}

*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:'Inter',system-ui,-apple-system,sans-serif;
  color:var(--ink);background:var(--bg);line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
h1,h2,h3,.display{
  font-family:'Anton',Impact,sans-serif;font-weight:400;
  letter-spacing:.5px;line-height:1.04;text-transform:uppercase;color:var(--navy);
}
a{color:inherit;text-decoration:none}
main{min-height:60vh}
.wrap{max-width:1140px;margin:0 auto;padding:0 24px}

/* ---------- Buttons ---------- */
.btn{display:inline-flex;align-items:center;gap:9px;font-weight:700;font-size:15px;
  padding:14px 26px;border-radius:32px;border:none;cursor:pointer;
  transition:transform .15s,box-shadow .2s,background .2s;font-family:inherit}
.btn-primary{background:var(--orange);color:#fff;box-shadow:0 10px 24px rgba(255,90,31,.32)}
.btn-primary:hover{transform:translateY(-2px)}
.btn-primary:disabled{opacity:.6;transform:none;cursor:default}
.btn-ghost{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.3)}
.btn-ghost:hover{border-color:#fff}
.btn-ghost-dark{background:transparent;color:var(--navy);border:1.5px solid var(--line)}
.btn-ghost-dark:hover{border-color:var(--blue);color:var(--blue)}
.btn-small{padding:7px 14px;font-size:13px;border-radius:20px;background:#eef3ff;color:var(--blue);border:none}
.btn-small.danger{background:#fdecec;color:#d63333}
.btn-small:hover{filter:brightness(.97)}
.btn.full{width:100%;justify-content:center}

/* ---------- Nav ---------- */
.nav{position:sticky;top:0;z-index:50;background:rgba(10,26,51,.94);
  backdrop-filter:blur(8px);border-bottom:1px solid rgba(255,255,255,.08)}
.nav-inner{display:flex;align-items:center;justify-content:space-between;height:70px}
.brand{display:flex;align-items:center;gap:12px;color:#fff}
.brand .mark{width:40px;height:40px;border-radius:10px;
  background:linear-gradient(135deg,var(--blue),var(--orange));
  display:flex;align-items:center;justify-content:center;font-family:'Anton';font-size:17px;color:#fff}
.brand b{font-family:'Anton';font-weight:400;font-size:19px;letter-spacing:.5px}
nav ul{display:flex;gap:28px;list-style:none}
nav a{color:#cdd7e6;font-size:14px;font-weight:600;padding:6px 0;position:relative;transition:color .2s}
nav a:hover{color:#fff}
.nav-cta{background:var(--orange);color:#fff!important;padding:10px 18px!important;border-radius:30px;font-size:13px}

/* ---------- Hero ---------- */
.hero{position:relative;background:linear-gradient(135deg,var(--navy) 0%,var(--navy-2) 60%,#16356b 100%);
  color:#fff;overflow:hidden}
.hero::before{content:"";position:absolute;right:-120px;top:-80px;width:520px;height:520px;
  background:radial-gradient(circle,rgba(30,111,255,.45),transparent 60%)}
.hero::after{content:"";position:absolute;left:-100px;bottom:-160px;width:480px;height:480px;
  background:radial-gradient(circle,rgba(255,90,31,.28),transparent 60%)}
.hero-grid{position:relative;display:grid;grid-template-columns:1.15fr .85fr;gap:48px;align-items:center;padding:84px 0 92px}
.eyebrow{display:inline-block;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);
  color:#bcd2ff;font-size:12px;font-weight:700;letter-spacing:1.5px;padding:7px 16px;border-radius:30px;
  text-transform:uppercase;margin-bottom:22px}
.hero h1{font-size:clamp(44px,6vw,78px);color:#fff;margin-bottom:18px}
.hero h1 .accent{color:var(--orange)}
.hero .lead{font-size:18px;color:#c4d2e6;max-width:480px;margin-bottom:30px}
.btn-row{display:flex;gap:14px;flex-wrap:wrap}
.hero-card{position:relative;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);
  border-radius:20px;padding:30px;backdrop-filter:blur(6px)}
.hero-card .photo{width:100%;aspect-ratio:4/5;border-radius:14px;
  background:linear-gradient(135deg,#1e6fff,#0a1a33);display:flex;align-items:center;justify-content:center;
  font-family:'Anton';font-size:64px;color:rgba(255,255,255,.85)}
.hero-card .cap{margin-top:16px;font-size:13px;color:#aebfd6}
.hero-card .cap b{color:#fff;font-size:15px;display:block;font-family:'Inter';font-weight:700}
.quickstats{display:flex;gap:10px;margin-top:18px}
.quickstats div{flex:1;background:rgba(255,255,255,.07);border-radius:12px;padding:12px;text-align:center}
.quickstats span{display:block;font-family:'Anton';font-size:24px;color:var(--orange)}
.quickstats small{font-size:11px;color:#aebfd6;text-transform:uppercase;letter-spacing:.5px}

/* ---------- Sections ---------- */
.block{padding:78px 0}
.sec-head{margin-bottom:42px;max-width:640px}
.sec-head.tight{margin-bottom:22px}
.kicker{color:var(--blue);font-weight:800;font-size:13px;letter-spacing:2px;text-transform:uppercase}
.kicker.orange{color:var(--orange)}
.sec-head h2{font-size:clamp(30px,4vw,46px);margin:10px 0 14px}
.sec-head p{color:var(--muted);font-size:16px}

/* About */
.about{background:var(--white)}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}
.about-text{color:#374150;font-size:16.5px;margin-bottom:18px}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px}
.chip{background:#eef3ff;color:var(--blue);font-weight:600;font-size:13px;padding:8px 15px;border-radius:30px}
.about-visual{background:linear-gradient(135deg,var(--navy),var(--navy-2));border-radius:20px;padding:36px;color:#fff}
.about-visual h3{font-size:26px;color:#fff;margin-bottom:8px}
.about-visual .role{color:var(--orange);font-weight:700;font-size:14px;letter-spacing:.5px;text-transform:uppercase}
.about-visual ul{list-style:none;margin-top:20px}
.about-visual li{position:relative;padding:11px 0 11px 22px;border-bottom:1px solid rgba(255,255,255,.1);font-size:15px;color:#d4ddec}
.about-visual li::before{content:"›";position:absolute;left:0;color:var(--orange);font-weight:800;font-size:18px}

/* LUK cards */
.luk{background:var(--bg)}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.card{background:var(--white);border-radius:var(--radius);overflow:hidden;border:1px solid var(--line);
  transition:transform .2s,box-shadow .25s;display:flex;flex-direction:column}
.card:hover{transform:translateY(-6px);box-shadow:0 22px 44px rgba(16,42,82,.14)}
.card-top{height:120px;display:flex;align-items:flex-end;padding:18px;position:relative}
.cover-0 .card-top{background:linear-gradient(135deg,#1e6fff,#0a1a33)}
.cover-1 .card-top{background:linear-gradient(135deg,#ff5a1f,#a52d05)}
.cover-2 .card-top{background:linear-gradient(135deg,#16356b,#1e6fff)}
.card-num{font-family:'Anton';font-size:60px;color:rgba(255,255,255,.22);position:absolute;top:6px;right:18px;line-height:1}
.card-tag{background:rgba(255,255,255,.16);color:#fff;font-weight:700;font-size:11px;letter-spacing:1px;
  padding:6px 12px;border-radius:20px;text-transform:uppercase}
.card-body{padding:24px;flex:1;display:flex;flex-direction:column}
.card-body h3{font-size:21px;margin-bottom:10px;color:var(--navy);text-transform:none;font-family:'Inter';font-weight:800;letter-spacing:0;line-height:1.25}
.card-body p{color:var(--muted);font-size:14.5px;flex:1}
.more{margin-top:16px;color:var(--orange);font-weight:700;font-size:14px;display:inline-flex;align-items:center;gap:7px}
.card:hover .arrow{transform:translateX(5px)}
.arrow{transition:transform .2s;display:inline-block}

/* Contact */
.contact{background:linear-gradient(135deg,var(--navy),#16356b);color:#fff;text-align:center}
.contact h2{font-size:clamp(32px,4.5vw,52px);color:#fff;margin:10px 0 14px}
.contact p{color:#c4d2e6;max-width:520px;margin:0 auto 28px;font-size:17px}

/* Footer */
footer{background:#06112a;color:#8fa3c2;padding:30px 0;font-size:14px}
.foot-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px}
footer b{font-family:'Anton';color:#fff;font-weight:400;letter-spacing:.5px}
.foot-right{display:flex;align-items:center;gap:18px}
.foot-admin{color:#6f86a8;font-size:13px;border:1px solid rgba(255,255,255,.14);padding:5px 12px;border-radius:20px}
.foot-admin:hover{color:#fff;border-color:rgba(255,255,255,.3)}

/* ---------- Article page ---------- */
.article-hero{background:linear-gradient(135deg,var(--navy),#16356b);color:#fff;padding:54px 0 60px}
.back-link{display:inline-block;color:#bcd2ff;font-size:14px;font-weight:600;margin-bottom:22px}
.back-link:hover{color:#fff}
.article-tag{display:inline-block;background:var(--orange);color:#fff;font-weight:700;font-size:12px;
  letter-spacing:1px;text-transform:uppercase;padding:6px 14px;border-radius:20px;margin-bottom:16px}
.article-hero h1{color:#fff;font-size:clamp(30px,5vw,52px);max-width:900px}
.article-body{max-width:760px;padding-top:50px;padding-bottom:80px}
.prose p{font-size:17px;color:#2b3440;margin-bottom:20px;line-height:1.75}
.prose h2{font-family:'Inter';font-weight:800;text-transform:none;letter-spacing:0;color:var(--navy);
  font-size:24px;margin:34px 0 12px}
.prose strong{color:var(--navy)}
.prose ul{list-style:none;margin:0 0 22px}
.prose li{position:relative;padding-left:28px;margin:9px 0;font-size:17px;color:#2b3440;line-height:1.7}
.prose li::before{content:"›";position:absolute;left:6px;top:-1px;color:var(--orange);font-weight:800;font-size:20px}
.next-box{margin-top:40px;padding:24px;background:#fff;border:1px solid var(--line);border-radius:var(--radius);
  display:flex;flex-direction:column;gap:6px}
.next-box span{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:1px;font-weight:700}
.next-link{font-family:'Inter';font-weight:800;color:var(--navy);font-size:19px}
.next-link:hover{color:var(--orange)}

/* ---------- Auth (login) ---------- */
.auth-wrap{min-height:70vh;display:flex;align-items:center;justify-content:center;padding:60px 24px;background:var(--bg)}
.auth-card{width:100%;max-width:420px;background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:36px}
.auth-title{font-family:'Inter';font-weight:800;text-transform:none;letter-spacing:0;color:var(--navy);font-size:24px}
.auth-sub{color:var(--muted);font-size:15px;margin:6px 0 22px}
.auth-back{display:inline-block;margin-top:20px;color:var(--muted);font-size:14px;font-weight:600}
.auth-back:hover{color:var(--blue)}

/* ---------- Forms ---------- */
label{display:block;font-size:13px;font-weight:600;color:var(--navy);margin:14px 0 6px}
input,textarea,select{width:100%;padding:11px 13px;border:1px solid var(--line);border-radius:10px;
  font-family:inherit;font-size:15px;color:var(--ink);background:#fff;transition:border .15s,box-shadow .15s}
input:focus,textarea:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 3px rgba(30,111,255,.12)}
textarea{resize:vertical}
textarea.mono{font-family:ui-monospace,'SFMono-Regular',Menlo,Consolas,monospace;font-size:13.5px;line-height:1.6}
.hint{font-weight:400;color:var(--muted);font-size:12px}

/* ---------- Admin ---------- */
.admin-wrap{max-width:1140px;margin:0 auto;padding:40px 24px 80px}
.admin-head{display:flex;justify-content:space-between;align-items:flex-start;gap:18px;flex-wrap:wrap;margin-bottom:8px}
.admin-head h1{font-family:'Inter';font-weight:800;text-transform:none;letter-spacing:0;font-size:30px;color:var(--navy)}
.admin-head p{color:var(--muted);font-size:15px;margin-top:4px}
.admin-actions{display:flex;gap:10px;flex-wrap:wrap}
.admin-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:28px;margin-top:24px;align-items:start}
.admin-form{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:26px}
.admin-form h2{font-family:'Inter';font-weight:800;text-transform:none;letter-spacing:0;font-size:20px;color:var(--navy);margin-bottom:6px}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;align-items:end}
.row3 .check{display:flex;flex-direction:column}
.row3 .check input{width:22px;height:22px;margin-top:4px}
.form-buttons{display:flex;gap:10px;margin-top:20px}
.admin-list{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:22px}
.admin-list-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
.admin-list-head h2{font-family:'Inter';font-weight:800;text-transform:none;letter-spacing:0;font-size:18px;color:var(--navy)}
.list-item{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 0;border-top:1px solid var(--line)}
.list-item strong{display:block;color:var(--navy);font-size:15px}
.li-meta{font-size:12.5px;color:var(--muted)}
.li-actions{display:flex;gap:8px;flex-shrink:0}
.empty{color:var(--muted);font-size:15px;padding:10px 0}

/* ---------- Notices ---------- */
.notice{padding:13px 16px;border-radius:10px;font-size:14px;margin:14px 0}
.notice-info{background:#eef3ff;color:#13408a;border:1px solid #cfe0ff}
.notice-warn{background:#fff4e9;color:#9a4a12;border:1px solid #ffd9b8}
.notice-error{background:#fdecec;color:#a32424;border:1px solid #f6c9c9}

/* ---------- Responsive ---------- */
@media(max-width:860px){
  nav ul{display:none}
  .hero-grid,.about-grid,.cards,.admin-grid{grid-template-columns:1fr}
  .hero-grid{padding:56px 0 64px}
}
