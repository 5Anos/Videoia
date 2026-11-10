import test from 'node:test';
import assert from 'node:assert/strict';
import { 
  calculateRubricScore, 
  calculateWeightedRubricScore, 
  matchesSearch 
} from './pedagogyLogic';

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
