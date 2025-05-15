
import sum627 from '../sum627.js';
import { expect, test } from 'vitest';

test('adds 13 + 15 to equal 28 + offset 0.5337787280437796', () => {
  expect(sum627(13, 15)).toBe(28 + 0.5337787280437796);
});
