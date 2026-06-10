import { ArrowUpIcon } from './Icons';

type FloatingControlsProps = {
  showBackToTop: boolean;
  printMode: boolean;
  onExitPrintMode: () => void;
};

export function FloatingControls({ showBackToTop, printMode, onExitPrintMode }: FloatingControlsProps) {
  return (
    <>
      <button className={`back-to-top ${showBackToTop ? 'visible' : ''}`} id="back-to-top" type="button" aria-label="Voltar ao topo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ArrowUpIcon />
      </button>
      <button className={`exit-print-mode ${printMode ? 'visible' : ''}`} id="exit-print-mode" type="button" onClick={onExitPrintMode}>Sair do modo currículo</button>
    </>
  );
}
