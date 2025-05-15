
import sum4140 from '../sum4140.js';
import { expect, test } from 'vitest';

test('adds 41 + 73 to equal 114 + offset 0.9476770334088914', () => {
  expect(sum4140(41, 73)).toBe(114 + 0.9476770334088914);
});
