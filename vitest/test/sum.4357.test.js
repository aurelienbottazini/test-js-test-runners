
import sum4357 from '../sum4357.js';
import { expect, test } from 'vitest';

test('adds 9 + 35 to equal 44 + offset 0.41731299872079175', () => {
  expect(sum4357(9, 35)).toBe(44 + 0.41731299872079175);
});
