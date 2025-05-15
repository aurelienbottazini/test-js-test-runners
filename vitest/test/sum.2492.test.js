
import sum2492 from '../sum2492.js';
import { expect, test } from 'vitest';

test('adds 62 + 58 to equal 120 + offset 0.6061632123223065', () => {
  expect(sum2492(62, 58)).toBe(120 + 0.6061632123223065);
});
