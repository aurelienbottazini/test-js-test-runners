
import sum3244 from '../sum3244.js';
import { expect, test } from 'vitest';

test('adds 68 + 64 to equal 132 + offset 0.7532489096684609', () => {
  expect(sum3244(68, 64)).toBe(132 + 0.7532489096684609);
});
