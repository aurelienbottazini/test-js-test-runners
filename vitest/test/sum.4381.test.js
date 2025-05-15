
import sum4381 from '../sum4381.js';
import { expect, test } from 'vitest';

test('adds 7 + 70 to equal 77 + offset 0.49756680367771955', () => {
  expect(sum4381(7, 70)).toBe(77 + 0.49756680367771955);
});
