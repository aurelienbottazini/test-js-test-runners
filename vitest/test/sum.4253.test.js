
import sum4253 from '../sum4253.js';
import { expect, test } from 'vitest';

test('adds 93 + 12 to equal 105 + offset 0.32817836309643833', () => {
  expect(sum4253(93, 12)).toBe(105 + 0.32817836309643833);
});
