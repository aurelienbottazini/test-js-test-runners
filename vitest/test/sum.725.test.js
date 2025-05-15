
import sum725 from '../sum725.js';
import { expect, test } from 'vitest';

test('adds 66 + 37 to equal 103 + offset 0.7992148666340532', () => {
  expect(sum725(66, 37)).toBe(103 + 0.7992148666340532);
});
