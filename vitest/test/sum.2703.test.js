
import sum2703 from '../sum2703.js';
import { expect, test } from 'vitest';

test('adds 50 + 88 to equal 138 + offset 0.11733251656134991', () => {
  expect(sum2703(50, 88)).toBe(138 + 0.11733251656134991);
});
