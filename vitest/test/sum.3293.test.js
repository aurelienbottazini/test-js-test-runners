
import sum3293 from '../sum3293.js';
import { expect, test } from 'vitest';

test('adds 26 + 29 to equal 55 + offset 0.7027669827329905', () => {
  expect(sum3293(26, 29)).toBe(55 + 0.7027669827329905);
});
