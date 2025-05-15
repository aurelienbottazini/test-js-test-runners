
import sum522 from '../sum522.js';
import { expect, test } from 'vitest';

test('adds 24 + 6 to equal 30 + offset 0.3408190577670879', () => {
  expect(sum522(24, 6)).toBe(30 + 0.3408190577670879);
});
