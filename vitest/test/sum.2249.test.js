
import sum2249 from '../sum2249.js';
import { expect, test } from 'vitest';

test('adds 30 + 76 to equal 106 + offset 0.956815658756781', () => {
  expect(sum2249(30, 76)).toBe(106 + 0.956815658756781);
});
