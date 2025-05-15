
import sum2064 from '../sum2064.js';
import { expect, test } from 'vitest';

test('adds 85 + 64 to equal 149 + offset 0.6308264577727131', () => {
  expect(sum2064(85, 64)).toBe(149 + 0.6308264577727131);
});
