
import sum3068 from '../sum3068.js';
import { expect, test } from 'vitest';

test('adds 1 + 44 to equal 45 + offset 0.7315494766453675', () => {
  expect(sum3068(1, 44)).toBe(45 + 0.7315494766453675);
});
