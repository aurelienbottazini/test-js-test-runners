
import sum4845 from '../sum4845.js';
import { expect, test } from 'vitest';

test('adds 2 + 91 to equal 93 + offset 0.061384545576450567', () => {
  expect(sum4845(2, 91)).toBe(93 + 0.061384545576450567);
});
