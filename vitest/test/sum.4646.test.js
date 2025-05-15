
import sum4646 from '../sum4646.js';
import { expect, test } from 'vitest';

test('adds 57 + 73 to equal 130 + offset 0.5083752485594306', () => {
  expect(sum4646(57, 73)).toBe(130 + 0.5083752485594306);
});
