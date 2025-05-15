
import sum2167 from '../sum2167.js';
import { expect, test } from 'vitest';

test('adds 48 + 10 to equal 58 + offset 0.9518694368257512', () => {
  expect(sum2167(48, 10)).toBe(58 + 0.9518694368257512);
});
