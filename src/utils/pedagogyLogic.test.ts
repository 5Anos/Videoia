import test from 'node:test';
import assert from 'node:assert/strict';
import { generateEducationalPrompt, calculateRubricScore, matchesSearch } from './pedagogyLogic';

test('generateEducationalPrompt creates comprehensive prompt with pedagogical criteria', () => {
  const result = generateEducationalPrompt({
    subject: 'Ciências Naturais',
    gradeLevel: '5.º ano',
    topic: 'Sistema Imunitário',
    videoStyle: 'animation',
    duration: '2 minutos'
  });

  assert.ok(result.includes('Ciências Naturais'));
  assert.ok(result.includes('5.º ano'));
  assert.ok(result.includes('Sistema Imunitário'));
  assert.ok(result.includes('estilo animação'));
  assert.ok(result.includes('sem sobrecarga cognitiva'));
});

test('generateEducationalPrompt generates clean prompt for perchance tool without false translation claims', () => {
  const result = generateEducationalPrompt({
    subject: 'História',
    gradeLevel: '8.º ano',
    topic: '25 de Abril',
    videoStyle: 'documentary',
    toolTarget: 'perchance'
  });

  assert.equal(result.includes('prompts em inglês'), false);
  assert.ok(result.includes('História'));
});

test('calculateRubricScore calculates qualitative ratings and percentages correctly', () => {
  const scoreMax = calculateRubricScore({
    scientificAccuracy: 5,
    clarityAndPacing: 5,
    creativityAndStyle: 5,
    debateParticipation: 5
  });
  assert.equal(scoreMax.total, 20);
  assert.equal(scoreMax.percentage, 100);
  assert.equal(scoreMax.qualitativeGrade, 'Excelente');

  const scoreMedium = calculateRubricScore({
    scientificAccuracy: 4,
    clarityAndPacing: 4,
    creativityAndStyle: 3,
    debateParticipation: 3
  });
  assert.equal(scoreMedium.total, 14);
  assert.equal(scoreMedium.percentage, 70);
  assert.equal(scoreMedium.qualitativeGrade, 'Bom');

  const scoreLow = calculateRubricScore({
    scientificAccuracy: 2,
    clarityAndPacing: 2,
    creativityAndStyle: 2,
    debateParticipation: 2
  });
  assert.equal(scoreLow.total, 8);
  assert.equal(scoreLow.percentage, 40);
  assert.equal(scoreLow.qualitativeGrade, 'Insuficiente');
});

test('matchesSearch properly performs multi-word query matching', () => {
  const fields = ['Vidnoz', 'Ferramenta de criação de avatares com IA', 'Permite diálogos entre duas personagens'];
  assert.equal(matchesSearch('vidnoz avatares', fields), true);
  assert.equal(matchesSearch('diálogos personagens', fields), true);
  assert.equal(matchesSearch('inexistente termo', fields), false);
  assert.equal(matchesSearch('', fields), true);
});

test('matchesSearch normalizes accents in query and target fields (ciencias, educacao, video)', () => {
  const fields = ['Ciências Naturais', 'Educação Visual', 'Edição de vídeo com IA'];
  assert.equal(matchesSearch('ciencias', fields), true);
  assert.equal(matchesSearch('educacao', fields), true);
  assert.equal(matchesSearch('video', fields), true);
  assert.equal(matchesSearch('ciencias naturais video', fields), true);
  assert.equal(matchesSearch('EDUCACAO', fields), true);
});
