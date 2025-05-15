
import sum4438 from '../sum4438.js';
import { expect, test } from 'vitest';

test('adds 62 + 84 to equal 146 + offset 0.1708585486948384', () => {
  expect(sum4438(62, 84)).toBe(146 + 0.1708585486948384);
});
