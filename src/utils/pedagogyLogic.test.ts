import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  generateEducationalPrompt, 
  calculateRubricScore, 
  calculateWeightedRubricScore, 
  matchesSearch 
} from './pedagogyLogic';

test('generateEducationalPrompt differentiates clip generator tools (Kling, Luma, Pika)', () => {
  const result = generateEducationalPrompt({
    subject: 'Ciências Naturais',
    gradeLevel: '3.º Ciclo (8.º ano)',
    topic: 'Tectónica de Placas',
    videoStyle: 'realistic',
    toolTarget: 'kling',
    clipDuration: '5 segundos',
    duration: '2 minutos',
    visualRestrictions: 'Evitar texto em inglês e mapas anacrónicos'
  });

  assert.ok(result.includes('Sujeito principal'));
  assert.ok(result.includes('Ação visível'));
  assert.ok(result.includes('Tectónica de Placas'));
  assert.ok(result.includes('Restrições visuais: Evitar texto em inglês e mapas anacrónicos'));
  assert.ok(result.includes('Nota de produção'));
  assert.ok(!result.includes('traduzir para inglês'));
});

test('generateEducationalPrompt differentiates full video tool (InVideo AI)', () => {
  const result = generateEducationalPrompt({
    subject: 'História',
    gradeLevel: '3.º Ciclo (9.º ano)',
    topic: 'A Revolução dos Cravos',
    videoStyle: 'documentary',
    toolTarget: 'invideo',
    duration: '90 segundos'
  });

  assert.ok(result.includes('Estrutura do guião'));
  assert.ok(result.includes('Português de Portugal'));
  assert.ok(result.includes('Legendas: Legendas completas sincronizadas'));
});

test('generateEducationalPrompt differentiates video editors (CapCut, Clipchamp, Canva)', () => {
  const result = generateEducationalPrompt({
    subject: 'Português',
    gradeLevel: '2.º Ciclo (6.º ano)',
    topic: 'Entrevista a um Poeta',
    videoStyle: 'animation',
    toolTarget: 'capcut',
    duration: '2 minutos'
  });

  assert.ok(result.includes('Storyboard visual'));
  assert.ok(result.includes('Texto da narração'));
  assert.ok(result.includes('Instruções de montagem'));
});

test('generateEducationalPrompt differentiates avatar tools (HeyGen, Vidnoz)', () => {
  const result = generateEducationalPrompt({
    subject: 'Filosofia',
    gradeLevel: 'Ensino Secundário (10.º ano)',
    topic: 'O Mito da Caverna de Platão',
    videoStyle: 'avatar',
    toolTarget: 'heygen',
    duration: '1 minuto'
  });

  assert.ok(result.includes('apresentador virtual'));
  assert.ok(result.includes('Divisão em cenas'));
  assert.ok(result.includes('Aviso ético e institucional'));
});

test('calculateWeightedRubricScore calculates 0-20 weighted scale rigorously', () => {
  const rubric = [
    { id: 'crit1', weight: 40 },
    { id: 'crit2', weight: 30 },
    { id: 'crit3', weight: 20 },
    { id: 'crit4', weight: 10 }
  ];

  // All 5s -> exactly 20 values
  const maxScore = calculateWeightedRubricScore(
    { crit1: 5, crit2: 5, crit3: 5, crit4: 5 },
    rubric
  );
  assert.equal(maxScore.total, 20);
  assert.equal(maxScore.percentage, 100);

  // All 0s -> exactly 0 values
  const minScore = calculateWeightedRubricScore(
    { crit1: 0, crit2: 0, crit3: 0, crit4: 0 },
    rubric
  );
  assert.equal(minScore.total, 0);
  assert.equal(minScore.percentage, 0);

  // Specific weighting: crit1 (40%) = 5, others = 0 -> (5 * 40)/100 * 4 = 8 values
  const partialScore = calculateWeightedRubricScore(
    { crit1: 5, crit2: 0, crit3: 0, crit4: 0 },
    rubric
  );
  assert.equal(partialScore.total, 8);
  assert.equal(partialScore.percentage, 40);
});

test('matchesSearch normalizes accents in query and target fields (ciencias, educacao, video)', () => {
  const fields = ['Ciências Naturais', 'Educação Visual', 'Edição de vídeo com IA'];
  assert.equal(matchesSearch('ciencias', fields), true);
  assert.equal(matchesSearch('educacao', fields), true);
  assert.equal(matchesSearch('video', fields), true);
  assert.equal(matchesSearch('ciencias naturais video', fields), true);
  assert.equal(matchesSearch('EDUCACAO', fields), true);
});
