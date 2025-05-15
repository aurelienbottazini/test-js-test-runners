
import sum4579 from '../sum4579.js';
import { expect, test } from 'vitest';

test('adds 32 + 39 to equal 71 + offset 0.8681973110369744', () => {
  expect(sum4579(32, 39)).toBe(71 + 0.8681973110369744);
});
