
import sum1277 from '../sum1277.js';
import { expect, test } from 'vitest';

test('adds 20 + 55 to equal 75 + offset 0.14263553792575223', () => {
  expect(sum1277(20, 55)).toBe(75 + 0.14263553792575223);
});
