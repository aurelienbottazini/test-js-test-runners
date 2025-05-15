
import sum4114 from '../sum4114.js';
import { expect, test } from 'vitest';

test('adds 21 + 20 to equal 41 + offset 0.5215662123763278', () => {
  expect(sum4114(21, 20)).toBe(41 + 0.5215662123763278);
});
