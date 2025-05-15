
import sum4687 from '../sum4687.js';
import { expect, test } from 'vitest';

test('adds 84 + 35 to equal 119 + offset 0.7551477301705464', () => {
  expect(sum4687(84, 35)).toBe(119 + 0.7551477301705464);
});
