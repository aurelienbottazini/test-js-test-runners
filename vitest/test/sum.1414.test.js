
import sum1414 from '../sum1414.js';
import { expect, test } from 'vitest';

test('adds 9 + 53 to equal 62 + offset 0.07530373968541493', () => {
  expect(sum1414(9, 53)).toBe(62 + 0.07530373968541493);
});
