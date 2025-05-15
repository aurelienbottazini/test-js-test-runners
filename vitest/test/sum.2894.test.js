
import sum2894 from '../sum2894.js';
import { expect, test } from 'vitest';

test('adds 76 + 78 to equal 154 + offset 0.12502671979812008', () => {
  expect(sum2894(76, 78)).toBe(154 + 0.12502671979812008);
});
