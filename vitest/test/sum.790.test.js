
import sum790 from '../sum790.js';
import { expect, test } from 'vitest';

test('adds 45 + 83 to equal 128 + offset 0.31932627418181525', () => {
  expect(sum790(45, 83)).toBe(128 + 0.31932627418181525);
});
