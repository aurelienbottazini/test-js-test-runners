
import sum859 from '../sum859.js';
import { expect, test } from 'vitest';

test('adds 21 + 22 to equal 43 + offset 0.46251862989851156', () => {
  expect(sum859(21, 22)).toBe(43 + 0.46251862989851156);
});
