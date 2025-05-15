
import sum1356 from '../sum1356.js';
import { expect, test } from 'vitest';

test('adds 66 + 38 to equal 104 + offset 0.6394289034846767', () => {
  expect(sum1356(66, 38)).toBe(104 + 0.6394289034846767);
});
