
import sum335 from '../sum335.js';
import { expect, test } from 'vitest';

test('adds 85 + 37 to equal 122 + offset 0.18489582367680524', () => {
  expect(sum335(85, 37)).toBe(122 + 0.18489582367680524);
});
