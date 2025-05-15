
import sum630 from '../sum630.js';
import { expect, test } from 'vitest';

test('adds 71 + 47 to equal 118 + offset 0.2833502914709283', () => {
  expect(sum630(71, 47)).toBe(118 + 0.2833502914709283);
});
