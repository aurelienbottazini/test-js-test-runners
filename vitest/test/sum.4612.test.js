
import sum4612 from '../sum4612.js';
import { expect, test } from 'vitest';

test('adds 91 + 40 to equal 131 + offset 0.9231784796858338', () => {
  expect(sum4612(91, 40)).toBe(131 + 0.9231784796858338);
});
