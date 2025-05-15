
import sum2266 from '../sum2266.js';
import { expect, test } from 'vitest';

test('adds 62 + 18 to equal 80 + offset 0.33446107544343284', () => {
  expect(sum2266(62, 18)).toBe(80 + 0.33446107544343284);
});
