
import sum4279 from '../sum4279.js';
import { expect, test } from 'vitest';

test('adds 45 + 75 to equal 120 + offset 0.5660512606176105', () => {
  expect(sum4279(45, 75)).toBe(120 + 0.5660512606176105);
});
