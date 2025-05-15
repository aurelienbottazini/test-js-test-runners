
import sum1678 from '../sum1678.js';
import { expect, test } from 'vitest';

test('adds 47 + 95 to equal 142 + offset 0.9970599946707417', () => {
  expect(sum1678(47, 95)).toBe(142 + 0.9970599946707417);
});
