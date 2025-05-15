
import sum813 from '../sum813.js';
import { expect, test } from 'vitest';

test('adds 61 + 79 to equal 140 + offset 0.28283120606032597', () => {
  expect(sum813(61, 79)).toBe(140 + 0.28283120606032597);
});
