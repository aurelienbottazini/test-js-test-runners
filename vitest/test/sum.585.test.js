
import sum585 from '../sum585.js';
import { expect, test } from 'vitest';

test('adds 92 + 58 to equal 150 + offset 0.48416769521572856', () => {
  expect(sum585(92, 58)).toBe(150 + 0.48416769521572856);
});
