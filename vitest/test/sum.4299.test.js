
import sum4299 from '../sum4299.js';
import { expect, test } from 'vitest';

test('adds 64 + 19 to equal 83 + offset 0.9219918817774401', () => {
  expect(sum4299(64, 19)).toBe(83 + 0.9219918817774401);
});
