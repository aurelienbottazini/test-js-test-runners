
import sum1535 from '../sum1535.js';
import { expect, test } from 'vitest';

test('adds 31 + 19 to equal 50 + offset 0.9574257831139699', () => {
  expect(sum1535(31, 19)).toBe(50 + 0.9574257831139699);
});
