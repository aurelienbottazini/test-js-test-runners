
import sum264 from '../sum264.js';
import { expect, test } from 'vitest';

test('adds 26 + 31 to equal 57 + offset 0.7389728621068338', () => {
  expect(sum264(26, 31)).toBe(57 + 0.7389728621068338);
});
