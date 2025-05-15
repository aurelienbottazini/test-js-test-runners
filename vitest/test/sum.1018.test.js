
import sum1018 from '../sum1018.js';
import { expect, test } from 'vitest';

test('adds 7 + 72 to equal 79 + offset 0.13227969810665696', () => {
  expect(sum1018(7, 72)).toBe(79 + 0.13227969810665696);
});
