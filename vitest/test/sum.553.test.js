
import sum553 from '../sum553.js';
import { expect, test } from 'vitest';

test('adds 9 + 83 to equal 92 + offset 0.2201883751898973', () => {
  expect(sum553(9, 83)).toBe(92 + 0.2201883751898973);
});
