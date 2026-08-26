/* Style reminder: Editorial Command Desk — states are evidence, not decoration; keep copy precise and actions recoverable. */
import { AlertCircle, Inbox, Loader2, RotateCcw } from "lucide-react";

type ViewState = "ready" | "loading" | "error" | "empty";

type StatePanelProps = {
  state: ViewState;
  onRetry: () => void;
};

export function StatePanel({ state, onRetry }: StatePanelProps) {
  if (state === "loading") {
    return <div className="state-panel" role="status" aria-live="polite"><Loader2 className="state-icon spin" size={22} /><strong>جاري تحميل المشاريع</strong><span>نرتب الأدلة والمعلومات الآن.</span></div>;
  }

  if (state === "error") {
    return <div className="state-panel state-error" role="alert"><AlertCircle className="state-icon" size={22} /><strong>تعذر تحميل مساحة العمل</strong><span>حدث خطأ مؤقت. يمكنك المحاولة مرة أخرى.</span><button className="subtle-button" onClick={onRetry}><RotateCcw size={15} /> إعادة المحاولة</button></div>;
  }

  if (state === "empty") {
    return <div className="state-panel" role="status"><Inbox className="state-icon" size={22} /><strong>لا توجد مشاريع مطابقة</strong><span>غيّري البحث أو الفلتر لرؤية نتائج أخرى.</span></div>;
  }

  return null;
}

export type { ViewState };
