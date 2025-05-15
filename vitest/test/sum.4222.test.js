
import sum4222 from '../sum4222.js';
import { expect, test } from 'vitest';

test('adds 76 + 16 to equal 92 + offset 0.07660484129884637', () => {
  expect(sum4222(76, 16)).toBe(92 + 0.07660484129884637);
});
