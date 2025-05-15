
import sum4204 from '../sum4204.js';
import { expect, test } from 'vitest';

test('adds 93 + 45 to equal 138 + offset 0.3644346927592018', () => {
  expect(sum4204(93, 45)).toBe(138 + 0.3644346927592018);
});
