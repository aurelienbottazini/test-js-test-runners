
import sum2050 from '../sum2050.js';
import { expect, test } from 'vitest';

test('adds 69 + 26 to equal 95 + offset 0.37901253350145603', () => {
  expect(sum2050(69, 26)).toBe(95 + 0.37901253350145603);
});
