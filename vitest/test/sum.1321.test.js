
import sum1321 from '../sum1321.js';
import { expect, test } from 'vitest';

test('adds 51 + 63 to equal 114 + offset 0.7771179561219705', () => {
  expect(sum1321(51, 63)).toBe(114 + 0.7771179561219705);
});
