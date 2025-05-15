
import sum2320 from '../sum2320.js';
import { expect, test } from 'vitest';

test('adds 27 + 16 to equal 43 + offset 0.5195963278651579', () => {
  expect(sum2320(27, 16)).toBe(43 + 0.5195963278651579);
});
