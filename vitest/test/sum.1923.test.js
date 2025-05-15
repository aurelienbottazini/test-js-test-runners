
import sum1923 from '../sum1923.js';
import { expect, test } from 'vitest';

test('adds 32 + 97 to equal 129 + offset 0.4446376386437342', () => {
  expect(sum1923(32, 97)).toBe(129 + 0.4446376386437342);
});
