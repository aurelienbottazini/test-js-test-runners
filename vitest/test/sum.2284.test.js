
import sum2284 from '../sum2284.js';
import { expect, test } from 'vitest';

test('adds 4 + 62 to equal 66 + offset 0.4293217366175798', () => {
  expect(sum2284(4, 62)).toBe(66 + 0.4293217366175798);
});
