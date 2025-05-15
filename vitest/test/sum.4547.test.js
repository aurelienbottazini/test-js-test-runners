
import sum4547 from '../sum4547.js';
import { expect, test } from 'vitest';

test('adds 62 + 68 to equal 130 + offset 0.05184127574623043', () => {
  expect(sum4547(62, 68)).toBe(130 + 0.05184127574623043);
});
