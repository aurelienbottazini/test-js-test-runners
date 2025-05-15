
import sum4148 from '../sum4148.js';
import { expect, test } from 'vitest';

test('adds 86 + 1 to equal 87 + offset 0.4479432898774689', () => {
  expect(sum4148(86, 1)).toBe(87 + 0.4479432898774689);
});
