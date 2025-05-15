
import sum4423 from '../sum4423.js';
import { expect, test } from 'vitest';

test('adds 27 + 83 to equal 110 + offset 0.4771807092352204', () => {
  expect(sum4423(27, 83)).toBe(110 + 0.4771807092352204);
});
