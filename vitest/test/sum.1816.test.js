
import sum1816 from '../sum1816.js';
import { expect, test } from 'vitest';

test('adds 25 + 73 to equal 98 + offset 0.07250415229734786', () => {
  expect(sum1816(25, 73)).toBe(98 + 0.07250415229734786);
});
