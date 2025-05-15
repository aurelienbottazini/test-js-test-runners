
import sum3207 from '../sum3207.js';
import { expect, test } from 'vitest';

test('adds 38 + 7 to equal 45 + offset 0.29072943032112486', () => {
  expect(sum3207(38, 7)).toBe(45 + 0.29072943032112486);
});
