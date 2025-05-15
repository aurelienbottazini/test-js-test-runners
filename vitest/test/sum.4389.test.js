
import sum4389 from '../sum4389.js';
import { expect, test } from 'vitest';

test('adds 75 + 27 to equal 102 + offset 0.9080094606778214', () => {
  expect(sum4389(75, 27)).toBe(102 + 0.9080094606778214);
});
