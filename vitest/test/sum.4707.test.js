
import sum4707 from '../sum4707.js';
import { expect, test } from 'vitest';

test('adds 43 + 67 to equal 110 + offset 0.3461938627706239', () => {
  expect(sum4707(43, 67)).toBe(110 + 0.3461938627706239);
});
