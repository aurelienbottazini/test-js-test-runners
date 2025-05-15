
import sum2691 from '../sum2691.js';
import { expect, test } from 'vitest';

test('adds 30 + 59 to equal 89 + offset 0.12329706986685263', () => {
  expect(sum2691(30, 59)).toBe(89 + 0.12329706986685263);
});
