
import sum2793 from '../sum2793.js';
import { expect, test } from 'vitest';

test('adds 16 + 69 to equal 85 + offset 0.5403523526270085', () => {
  expect(sum2793(16, 69)).toBe(85 + 0.5403523526270085);
});
