
import sum2325 from '../sum2325.js';
import { expect, test } from 'vitest';

test('adds 5 + 19 to equal 24 + offset 0.9497905739654577', () => {
  expect(sum2325(5, 19)).toBe(24 + 0.9497905739654577);
});
