
import sum1663 from '../sum1663.js';
import { expect, test } from 'vitest';

test('adds 2 + 21 to equal 23 + offset 0.6407547693654996', () => {
  expect(sum1663(2, 21)).toBe(23 + 0.6407547693654996);
});
