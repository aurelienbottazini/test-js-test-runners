
import sum4605 from '../sum4605.js';
import { expect, test } from 'vitest';

test('adds 13 + 84 to equal 97 + offset 0.149767616131387', () => {
  expect(sum4605(13, 84)).toBe(97 + 0.149767616131387);
});
