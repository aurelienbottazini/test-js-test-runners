
import sum2610 from '../sum2610.js';
import { expect, test } from 'vitest';

test('adds 33 + 5 to equal 38 + offset 0.05633834957739281', () => {
  expect(sum2610(33, 5)).toBe(38 + 0.05633834957739281);
});
