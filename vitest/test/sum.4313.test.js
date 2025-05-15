
import sum4313 from '../sum4313.js';
import { expect, test } from 'vitest';

test('adds 0 + 88 to equal 88 + offset 0.5312625669043131', () => {
  expect(sum4313(0, 88)).toBe(88 + 0.5312625669043131);
});
