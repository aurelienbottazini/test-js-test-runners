
import sum2901 from '../sum2901.js';
import { expect, test } from 'vitest';

test('adds 76 + 8 to equal 84 + offset 0.6645904157913817', () => {
  expect(sum2901(76, 8)).toBe(84 + 0.6645904157913817);
});
