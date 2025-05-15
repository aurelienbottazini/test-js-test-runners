
import sum326 from '../sum326.js';
import { expect, test } from 'vitest';

test('adds 22 + 55 to equal 77 + offset 0.7444359119293964', () => {
  expect(sum326(22, 55)).toBe(77 + 0.7444359119293964);
});
