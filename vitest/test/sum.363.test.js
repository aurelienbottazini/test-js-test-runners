
import sum363 from '../sum363.js';
import { expect, test } from 'vitest';

test('adds 2 + 21 to equal 23 + offset 0.7333766859724197', () => {
  expect(sum363(2, 21)).toBe(23 + 0.7333766859724197);
});
