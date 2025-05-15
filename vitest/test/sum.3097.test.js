
import sum3097 from '../sum3097.js';
import { expect, test } from 'vitest';

test('adds 85 + 16 to equal 101 + offset 0.09553848726495262', () => {
  expect(sum3097(85, 16)).toBe(101 + 0.09553848726495262);
});
