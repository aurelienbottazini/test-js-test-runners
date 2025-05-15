
import sum2221 from '../sum2221.js';
import { expect, test } from 'vitest';

test('adds 95 + 72 to equal 167 + offset 0.9737653385695135', () => {
  expect(sum2221(95, 72)).toBe(167 + 0.9737653385695135);
});
