
import sum4059 from '../sum4059.js';
import { expect, test } from 'vitest';

test('adds 41 + 79 to equal 120 + offset 0.7309024448619047', () => {
  expect(sum4059(41, 79)).toBe(120 + 0.7309024448619047);
});
