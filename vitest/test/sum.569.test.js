
import sum569 from '../sum569.js';
import { expect, test } from 'vitest';

test('adds 98 + 99 to equal 197 + offset 0.35303346745808606', () => {
  expect(sum569(98, 99)).toBe(197 + 0.35303346745808606);
});
