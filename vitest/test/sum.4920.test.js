
import sum4920 from '../sum4920.js';
import { expect, test } from 'vitest';

test('adds 1 + 9 to equal 10 + offset 0.17749419122545584', () => {
  expect(sum4920(1, 9)).toBe(10 + 0.17749419122545584);
});
