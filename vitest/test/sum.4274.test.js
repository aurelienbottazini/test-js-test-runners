
import sum4274 from '../sum4274.js';
import { expect, test } from 'vitest';

test('adds 76 + 59 to equal 135 + offset 0.7881984203392328', () => {
  expect(sum4274(76, 59)).toBe(135 + 0.7881984203392328);
});
