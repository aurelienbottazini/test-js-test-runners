
import sum1224 from '../sum1224.js';
import { expect, test } from 'vitest';

test('adds 95 + 39 to equal 134 + offset 0.6663726847475903', () => {
  expect(sum1224(95, 39)).toBe(134 + 0.6663726847475903);
});
