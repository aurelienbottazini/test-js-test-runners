
import sum673 from '../sum673.js';
import { expect, test } from 'vitest';

test('adds 7 + 29 to equal 36 + offset 0.41984906141153355', () => {
  expect(sum673(7, 29)).toBe(36 + 0.41984906141153355);
});
