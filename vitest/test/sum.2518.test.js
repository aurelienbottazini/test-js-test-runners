
import sum2518 from '../sum2518.js';
import { expect, test } from 'vitest';

test('adds 96 + 80 to equal 176 + offset 0.5261135989960138', () => {
  expect(sum2518(96, 80)).toBe(176 + 0.5261135989960138);
});
