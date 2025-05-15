
import sum2766 from '../sum2766.js';
import { expect, test } from 'vitest';

test('adds 87 + 54 to equal 141 + offset 0.5071742450445315', () => {
  expect(sum2766(87, 54)).toBe(141 + 0.5071742450445315);
});
