/* Style reminder: Editorial Command Desk — Swiss editorial hierarchy, ivory canvas, navy ink, burnt-signal accent, RTL-first, asymmetric dashboard composition. */
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { StatePanel, type ViewState } from "@/components/StatePanel";
import {
  ArrowUpLeft,
  BarChart3,
  Bell,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Code2,
  ExternalLink,
  Filter,
  FolderKanban,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

const projects = [
  { name: "Castel Pro", type: "Product UX", status: "قيد العرض", health: "مستقر", color: "orange", progress: 86, updated: "منذ ساعتين", repo: "castel-pro" },
  { name: "Arabic Todo", type: "Frontend app", status: "مكتمل", health: "مستقر", color: "sage", progress: 100, updated: "أمس", repo: "arabic-todo" },
  { name: "Carousel Factory", type: "Interactive editor", status: "قيد التحسين", health: "مراجعة", color: "blue", progress: 72, updated: "منذ 3 أيام", repo: "carousel-factory" },
  { name: "CodeRise", type: "Studio landing", status: "مكتمل", health: "مستقر", color: "navy", progress: 100, updated: "الأسبوع الماضي", repo: "coderise-site" },
];

const activity = [
  ["تم تحديث README", "castel-pro", "قبل ساعتين", "orange"],
  ["اكتمل فحص الاستجابة", "arabic-todo", "أمس", "sage"],
  ["أضيفت حالة فارغة", "carousel-factory", "منذ 3 أيام", "blue"],
];

export default function Home() {
  const [activeNav, setActiveNav] = useState("نظرة عامة");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("الكل");
  const [selected, setSelected] = useState(projects[0]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [viewState, setViewState] = useState<ViewState>("ready");

  const filteredProjects = useMemo(() => projects.filter((project) => {
    const matchesQuery = `${project.name} ${project.type}`.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "الكل" || project.status === filter;
    return matchesQuery && matchesFilter;
  }), [query, filter]);

  const navItems = [
    ["نظرة عامة", LayoutDashboard], ["المشاريع", FolderKanban], ["دراسات الحالة", BookOpen], ["المقاييس", BarChart3], ["الإعدادات", Settings2],
  ];

  return (
    <div dir="rtl" className="app-shell">
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true"><span /><span /><span /></div>
          <div><strong>MNY / DESK</strong><small>FRONTEND COMMAND</small></div>
          <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="إغلاق القائمة"><X size={18} /></button>
        </div>
        <div className="workspace-switcher"><span className="workspace-dot" /> <span>مساحة العمل الشخصية</span><ChevronDown size={15} /></div>
        <nav aria-label="التنقل الرئيسي">
          <p className="nav-label">مساحة العمل</p>
          {navItems.map(([label, Icon]) => <button key={label as string} className={`nav-item ${activeNav === label ? "active" : ""}`} onClick={() => { setActiveNav(label as string); setMobileOpen(false); }}><Icon size={18} /><span>{label as string}</span>{label === "المشاريع" && <b>8</b>}</button>)}
        </nav>
        <div className="sidebar-note"><span className="note-kicker"><CircleDot size={12} /> ملاحظة اليوم</span><p>الواجهة الجيدة تُفهم قبل أن تُعجب.</p><button onClick={() => toast("تم فتح دليل جودة الواجهة")}>اقرئي الدليل <ArrowUpLeft size={15} /></button></div>
        <div className="sidebar-footer"><div className="avatar">م</div><div><strong>منة الله يحيى</strong><small>Frontend Developer</small></div><MoreHorizontal size={18} /></div>
      </aside>

      <main className="main-content">
        <header className="topbar"><div className="topbar-leading"><button className="icon-button mobile-menu" onClick={() => setMobileOpen(true)} aria-label="فتح القائمة"><Menu size={20} /></button><div><div className="breadcrumb"><span>مساحة العمل</span><span>/</span><strong>{activeNav}</strong></div><p className="eyebrow">الثلاثاء، ٢٦ أغسطس ٢٠٢٦ <span className="live-pip" /> آخر مزامنة منذ ٤ دقائق</p></div></div><div className="topbar-actions"><button className="icon-button" aria-label="الإشعارات" onClick={() => toast("لا توجد إشعارات جديدة")}><Bell size={18} /><i /></button><button className="profile-chip"><span className="avatar small">م</span><ChevronDown size={15} /></button></div></header>

        <div className="content-wrap">
          <section className="hero-row"><div><p className="section-kicker"><Sparkles size={14} /> لوحة قيادة الملف المهني</p><h1>ابني واجهات<br /><em>تُفهم قبل أن تُعجب.</em></h1><p className="hero-copy">مساحة واحدة لمراجعة المشاريع، توثيق القرارات، وقياس التفاصيل التي تجعل تجربة الويب أكثر وضوحًا.</p><div className="hero-actions"><button className="primary-button" onClick={() => toast("تم تجهيز مساحة مشروع جديدة")}> <Plus size={17} /> مشروع جديد</button><button className="text-button" onClick={() => toast("تم فتح الجولة التعريفية")}>جولة سريعة <ArrowUpLeft size={16} /></button></div></div><div className="hero-blueprint" aria-label="مخطط بصري للواجهة"><div className="blueprint-top"><span>CASE STUDY / 04</span><span>RTL READY</span></div><div className="blueprint-window"><div className="blueprint-bar"><i /><i /><i /></div><div className="blueprint-columns"><div><b /><b /><b /><b /></div><div className="blueprint-chart"><span /><span /><span /><span /><span /><span /></div></div></div><div className="blueprint-caption"><span className="blueprint-line" /> قرار بصري موثق <strong>01</strong></div></div></section>

          <section className="metric-grid" aria-label="ملخص الأداء"><Metric label="مشاريع منشورة" value="08" change="+٢ هذا الشهر" icon={FolderKanban} /><Metric label="نسبة اكتمال التوثيق" value="78%" change="+١٢٪" icon={BookOpen} /><Metric label="حالات وصول مراجعة" value="24" change="+٨ هذا الأسبوع" icon={Target} /><Metric label="معاينات حية" value="08" change="كلها تعمل" icon={ExternalLink} /></section>

          <section className="work-grid"><div className="projects-panel panel"><div className="panel-heading"><div><p className="section-kicker">مساحة العمل <span className="count-pill">{filteredProjects.length}</span></p><h2>المشاريع النشطة</h2></div><button className="more-button" onClick={() => toast("تم فتح كل المشاريع")}>عرض الكل <ArrowUpLeft size={15} /></button></div><div className="toolbar"><div className="state-switcher" aria-label="تجربة حالات الواجهة"><span>حالات العرض</span>{([["ready", "جاهز"], ["loading", "تحميل"], ["error", "خطأ"], ["empty", "فارغ"]] as const).map(([value, label]) => <button key={value} className={viewState === value ? "selected" : ""} onClick={() => setViewState(value)}>{label}</button>)}</div><label className="search-field"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ابحثي عن مشروع..." aria-label="البحث في المشاريع" /></label><div className="filter-buttons"><Filter size={15} />{["الكل", "مكتمل", "قيد العرض"].map((item) => <button key={item} className={filter === item ? "selected" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div>{viewState !== "ready" ? <StatePanel state={viewState} onRetry={() => setViewState("ready")} /> : <div className="project-list">{filteredProjects.length === 0 ? <StatePanel state="empty" onRetry={() => { setQuery(""); setFilter("الكل"); }} /> : filteredProjects.map((project, index) => <button className={`project-row ${selected.name === project.name ? "selected-row" : ""}`} key={project.name} onClick={() => setSelected(project)}><span className={`project-icon ${project.color}`}><Code2 size={18} /></span><span className="project-title"><strong><span className="project-index">0{index + 1}</span>{project.name}</strong><small>{project.type}</small></span><span className="project-status"><i className={project.health === "مستقر" ? "stable" : "review"} />{project.health}</span><span className="progress-cell"><span className="progress-track"><span style={{ width: `${project.progress}%` }} /></span><small>{project.progress}%</small></span><span className="project-updated">{project.updated}</span><MoreHorizontal size={17} /></button>)}</div>}</div>

            <aside className="context-panel panel"><div className="context-top"><span className={`project-icon ${selected.color}`}><Code2 size={19} /></span><button className="more-button" aria-label="المزيد"><MoreHorizontal size={18} /></button></div><p className="section-kicker">المشروع المحدد</p><h2>{selected.name}</h2><p className="context-type">{selected.type} <span>•</span> {selected.repo}</p><div className="context-rule" /><div className="context-stat"><span>حالة المشروع</span><strong><i className="stable" /> {selected.health}</strong></div><div className="context-stat"><span>آخر تعديل</span><strong>{selected.updated}</strong></div><div className="context-stat"><span>اكتمال الدراسة</span><strong>{selected.progress}%</strong></div><div className="context-progress"><span style={{ width: `${selected.progress}%` }} /></div><button className="outline-button" onClick={() => toast(`فتح دراسة حالة ${selected.name}`)}>فتح دراسة الحالة <ArrowUpLeft size={16} /></button><button className="subtle-button" onClick={() => toast(`تم فتح ${selected.repo} على GitHub`)}><Code2 size={15} /> عرض المستودع</button></aside></section>

          <section className="bottom-grid"><div className="activity-panel panel"><div className="panel-heading"><div><p className="section-kicker">سجل العمل</p><h2>آخر التحديثات</h2></div><button className="more-button">هذا الأسبوع <ChevronDown size={15} /></button></div><div className="activity-list">{activity.map(([title, repo, time, color]) => <div className="activity-item" key={title}><span className={`activity-dot ${color}`} /><div><strong>{title}</strong><small>{repo}</small></div><time>{time}</time><CheckCircle2 size={16} className="activity-check" /></div>)}</div></div><div className="quality-panel panel"><div className="quality-head"><div><p className="section-kicker">فحص الجودة</p><h2>جاهزية العرض</h2></div><span className="quality-score">٩.١ <small>/ ١٠</small></span></div><div className="quality-bar"><span style={{ width: "84%" }} /></div><p>تم اجتياز فحوصات README وResponsive وTests، والواجهة جاهزة للمراجعة.</p><div className="quality-tasks"><span><CheckCircle2 size={15} /> README</span><span><CheckCircle2 size={15} /> Responsive</span><span><CheckCircle2 size={15} /> Tests</span></div><button className="subtle-button" onClick={() => toast("تم فتح قائمة تحسينات الجودة")}><Settings2 size={15} /> مراجعة التحسينات</button></div></section>
        </div>
      </main>
    </div>
  );
}

function Metric({ label, value, change, icon: Icon }: { label: string; value: string; change: string; icon: typeof FolderKanban }) { return <div className="metric-card"><span className="metric-icon"><Icon size={18} /></span><div><small><span className="metric-rule" />{label}</small><strong>{value}</strong><em>{change}</em></div></div>; }
