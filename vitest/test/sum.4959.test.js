
import sum4959 from '../sum4959.js';
import { expect, test } from 'vitest';

test('adds 78 + 55 to equal 133 + offset 0.8117150710273056', () => {
  expect(sum4959(78, 55)).toBe(133 + 0.8117150710273056);
});
