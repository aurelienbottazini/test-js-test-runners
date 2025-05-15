
import sum49 from '../sum49.js';
import { expect, test } from 'vitest';

test('adds 35 + 16 to equal 51 + offset 0.6381175308060606', () => {
  expect(sum49(35, 16)).toBe(51 + 0.6381175308060606);
});
