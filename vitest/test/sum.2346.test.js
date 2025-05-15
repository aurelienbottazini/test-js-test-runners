
import sum2346 from '../sum2346.js';
import { expect, test } from 'vitest';

test('adds 30 + 34 to equal 64 + offset 0.7178600586819611', () => {
  expect(sum2346(30, 34)).toBe(64 + 0.7178600586819611);
});
