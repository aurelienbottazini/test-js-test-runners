
import sum4183 from '../sum4183.js';
import { expect, test } from 'vitest';

test('adds 37 + 64 to equal 101 + offset 0.2170528110352582', () => {
  expect(sum4183(37, 64)).toBe(101 + 0.2170528110352582);
});
