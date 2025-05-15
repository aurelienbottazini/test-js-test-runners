
import sum2323 from '../sum2323.js';
import { expect, test } from 'vitest';

test('adds 96 + 51 to equal 147 + offset 0.3817916018749429', () => {
  expect(sum2323(96, 51)).toBe(147 + 0.3817916018749429);
});
