
import sum3559 from '../sum3559.js';
import { expect, test } from 'vitest';

test('adds 5 + 96 to equal 101 + offset 0.5563185758105537', () => {
  expect(sum3559(5, 96)).toBe(101 + 0.5563185758105537);
});
