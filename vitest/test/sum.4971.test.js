
import sum4971 from '../sum4971.js';
import { expect, test } from 'vitest';

test('adds 72 + 89 to equal 161 + offset 0.24022834181184116', () => {
  expect(sum4971(72, 89)).toBe(161 + 0.24022834181184116);
});
