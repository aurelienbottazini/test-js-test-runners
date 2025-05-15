
import sum4060 from '../sum4060.js';
import { expect, test } from 'vitest';

test('adds 17 + 58 to equal 75 + offset 0.6091560283344664', () => {
  expect(sum4060(17, 58)).toBe(75 + 0.6091560283344664);
});
