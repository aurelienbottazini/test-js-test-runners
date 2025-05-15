
import sum1696 from '../sum1696.js';
import { expect, test } from 'vitest';

test('adds 35 + 50 to equal 85 + offset 0.5177811815469695', () => {
  expect(sum1696(35, 50)).toBe(85 + 0.5177811815469695);
});
