
import sum284 from '../sum284.js';
import { expect, test } from 'vitest';

test('adds 14 + 4 to equal 18 + offset 0.02445079897117497', () => {
  expect(sum284(14, 4)).toBe(18 + 0.02445079897117497);
});
