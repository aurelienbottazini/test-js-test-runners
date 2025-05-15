
import sum4228 from '../sum4228.js';
import { expect, test } from 'vitest';

test('adds 75 + 1 to equal 76 + offset 0.693846040678416', () => {
  expect(sum4228(75, 1)).toBe(76 + 0.693846040678416);
});
