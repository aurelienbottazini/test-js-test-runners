
import sum4962 from '../sum4962.js';
import { expect, test } from 'vitest';

test('adds 36 + 88 to equal 124 + offset 0.011863744137376231', () => {
  expect(sum4962(36, 88)).toBe(124 + 0.011863744137376231);
});
