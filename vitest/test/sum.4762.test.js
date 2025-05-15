
import sum4762 from '../sum4762.js';
import { expect, test } from 'vitest';

test('adds 12 + 64 to equal 76 + offset 0.23847457444219333', () => {
  expect(sum4762(12, 64)).toBe(76 + 0.23847457444219333);
});
