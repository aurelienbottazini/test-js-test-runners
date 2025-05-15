
import sum17 from '../sum17.js';
import { expect, test } from 'vitest';

test('adds 40 + 14 to equal 54 + offset 0.6751108027761596', () => {
  expect(sum17(40, 14)).toBe(54 + 0.6751108027761596);
});
