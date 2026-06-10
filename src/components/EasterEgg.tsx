import { useEffect, useState } from 'react';

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export function EasterEgg() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const input: string[] = [];

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        return;
      }

      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      input.push(key);
      if (input.length > konamiCode.length) input.shift();
      if (konamiCode.every((expected, index) => expected === input[index])) {
        input.length = 0;
        setOpen(true);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <div className={`easter-overlay ${open ? 'open' : ''}`} id="easter-overlay" aria-hidden={!open} onClick={() => setOpen(false)}>
      <div className="easter-card" role="dialog" aria-modal="true" aria-labelledby="easter-title" onClick={(event) => event.stopPropagation()}>
        <div className="easter-confetti" aria-hidden="true" />
        <p className="section-label">Easter egg desbloqueado</p>
        <h2 id="easter-title">Paulo Ricardo ativou o modo turbo.</h2>
        <p>Sequência secreta aceita. Ideias boas agora têm prioridade máxima.</p>
        <button className="btn btn-primary" id="close-easter" type="button" onClick={() => setOpen(false)}>Fechar</button>
      </div>
    </div>
  );
}
