
import sum2125 from '../sum2125.js';
import { expect, test } from 'vitest';

test('adds 51 + 13 to equal 64 + offset 0.05004535513745301', () => {
  expect(sum2125(51, 13)).toBe(64 + 0.05004535513745301);
});
