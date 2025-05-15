
import sum4720 from '../sum4720.js';
import { expect, test } from 'vitest';

test('adds 41 + 95 to equal 136 + offset 0.17598339275685693', () => {
  expect(sum4720(41, 95)).toBe(136 + 0.17598339275685693);
});
