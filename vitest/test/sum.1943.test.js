
import sum1943 from '../sum1943.js';
import { expect, test } from 'vitest';

test('adds 35 + 36 to equal 71 + offset 0.5659688224096348', () => {
  expect(sum1943(35, 36)).toBe(71 + 0.5659688224096348);
});
