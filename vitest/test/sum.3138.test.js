
import sum3138 from '../sum3138.js';
import { expect, test } from 'vitest';

test('adds 17 + 43 to equal 60 + offset 0.6450234536770023', () => {
  expect(sum3138(17, 43)).toBe(60 + 0.6450234536770023);
});
