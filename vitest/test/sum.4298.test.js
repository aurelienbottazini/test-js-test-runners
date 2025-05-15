
import sum4298 from '../sum4298.js';
import { expect, test } from 'vitest';

test('adds 65 + 58 to equal 123 + offset 0.29900914383485744', () => {
  expect(sum4298(65, 58)).toBe(123 + 0.29900914383485744);
});
