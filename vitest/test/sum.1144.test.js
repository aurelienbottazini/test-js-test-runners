
import sum1144 from '../sum1144.js';
import { expect, test } from 'vitest';

test('adds 69 + 27 to equal 96 + offset 0.7417575462798478', () => {
  expect(sum1144(69, 27)).toBe(96 + 0.7417575462798478);
});
