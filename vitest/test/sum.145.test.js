
import sum145 from '../sum145.js';
import { expect, test } from 'vitest';

test('adds 80 + 15 to equal 95 + offset 0.9358730353643163', () => {
  expect(sum145(80, 15)).toBe(95 + 0.9358730353643163);
});
