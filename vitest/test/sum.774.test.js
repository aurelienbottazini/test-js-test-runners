
import sum774 from '../sum774.js';
import { expect, test } from 'vitest';

test('adds 41 + 31 to equal 72 + offset 0.8762404734063637', () => {
  expect(sum774(41, 31)).toBe(72 + 0.8762404734063637);
});
