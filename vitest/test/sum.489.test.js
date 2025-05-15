
import sum489 from '../sum489.js';
import { expect, test } from 'vitest';

test('adds 54 + 86 to equal 140 + offset 0.38758161001465197', () => {
  expect(sum489(54, 86)).toBe(140 + 0.38758161001465197);
});
