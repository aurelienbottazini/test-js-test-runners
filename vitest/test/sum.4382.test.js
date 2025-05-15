
import sum4382 from '../sum4382.js';
import { expect, test } from 'vitest';

test('adds 6 + 5 to equal 11 + offset 0.7442726789226879', () => {
  expect(sum4382(6, 5)).toBe(11 + 0.7442726789226879);
});
