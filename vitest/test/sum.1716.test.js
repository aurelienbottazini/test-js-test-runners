
import sum1716 from '../sum1716.js';
import { expect, test } from 'vitest';

test('adds 75 + 49 to equal 124 + offset 0.9621049501588601', () => {
  expect(sum1716(75, 49)).toBe(124 + 0.9621049501588601);
});
