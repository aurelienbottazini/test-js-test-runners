
import sum1447 from '../sum1447.js';
import { expect, test } from 'vitest';

test('adds 24 + 81 to equal 105 + offset 0.16071018790039426', () => {
  expect(sum1447(24, 81)).toBe(105 + 0.16071018790039426);
});
