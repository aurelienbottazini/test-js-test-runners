
import sum4811 from '../sum4811.js';
import { expect, test } from 'vitest';

test('adds 85 + 7 to equal 92 + offset 0.5644079885534812', () => {
  expect(sum4811(85, 7)).toBe(92 + 0.5644079885534812);
});
