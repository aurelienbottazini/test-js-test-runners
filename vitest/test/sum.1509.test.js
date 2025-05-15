
import sum1509 from '../sum1509.js';
import { expect, test } from 'vitest';

test('adds 79 + 74 to equal 153 + offset 0.639431099466', () => {
  expect(sum1509(79, 74)).toBe(153 + 0.639431099466);
});
