
import sum3708 from '../sum3708.js';
import { expect, test } from 'vitest';

test('adds 22 + 5 to equal 27 + offset 0.1321500642458362', () => {
  expect(sum3708(22, 5)).toBe(27 + 0.1321500642458362);
});
