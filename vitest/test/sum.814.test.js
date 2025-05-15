
import sum814 from '../sum814.js';
import { expect, test } from 'vitest';

test('adds 59 + 15 to equal 74 + offset 0.7521793172464682', () => {
  expect(sum814(59, 15)).toBe(74 + 0.7521793172464682);
});
