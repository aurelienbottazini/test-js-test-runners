
import sum4594 from '../sum4594.js';
import { expect, test } from 'vitest';

test('adds 41 + 83 to equal 124 + offset 0.23968380828838565', () => {
  expect(sum4594(41, 83)).toBe(124 + 0.23968380828838565);
});
