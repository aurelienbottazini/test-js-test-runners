
import sum4338 from '../sum4338.js';
import { expect, test } from 'vitest';

test('adds 79 + 75 to equal 154 + offset 0.5344676384888373', () => {
  expect(sum4338(79, 75)).toBe(154 + 0.5344676384888373);
});
