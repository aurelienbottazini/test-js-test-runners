
import sum2506 from '../sum2506.js';
import { expect, test } from 'vitest';

test('adds 23 + 44 to equal 67 + offset 0.5419290985132283', () => {
  expect(sum2506(23, 44)).toBe(67 + 0.5419290985132283);
});
