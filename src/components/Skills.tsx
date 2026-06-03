import { useMemo, useState } from 'react';
import { skills } from '../data/skills';
import type { SkillCategory } from '../types/portfolio';

const filters: Array<{ label: string; value: SkillCategory | 'todos' }> = [
  { label: 'Todos', value: 'todos' },
  { label: 'Software', value: 'software' },
  { label: 'Hardware', value: 'hardware' },
  { label: 'Ferramentas', value: 'ferramentas' },
];

type SkillsProps = {
  selectedSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
};

export function Skills({ selectedSkill, onSelectSkill }: SkillsProps) {
  const [filter, setFilter] = useState<SkillCategory | 'todos'>('todos');
  const visibleSkills = useMemo(() => skills.filter((skill) => filter === 'todos' || skill.category === filter), [filter]);

  function handleSkillClick(skillName: string) {
    onSelectSkill(selectedSkill === skillName ? null : skillName);
  }

  return (
    <section id="habilidades">
      <div className="container">
        <p className="section-label">Habilidades</p>
        <div className="skill-filters">
          {filters.map((item) => (
            <button key={item.value} className={`filter-btn ${filter === item.value ? 'active' : ''}`} type="button" data-filter={item.value} onClick={() => setFilter(item.value)}>{item.label}</button>
          ))}
        </div>
        <div className="skills-grid">
          {visibleSkills.map((skill) => (
            <button
              key={skill.name}
              className={`skill-pill ${selectedSkill === skill.name ? 'selected' : ''}`}
              type="button"
              data-cat={skill.category}
              aria-pressed={selectedSkill === skill.name}
              onClick={() => handleSkillClick(skill.name)}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
