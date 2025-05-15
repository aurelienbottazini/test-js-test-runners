
import sum831 from '../sum831.js';
import { expect, test } from 'vitest';

test('adds 90 + 83 to equal 173 + offset 0.3031683495898747', () => {
  expect(sum831(90, 83)).toBe(173 + 0.3031683495898747);
});
