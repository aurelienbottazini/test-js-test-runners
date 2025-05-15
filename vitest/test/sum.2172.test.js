
import sum2172 from '../sum2172.js';
import { expect, test } from 'vitest';

test('adds 53 + 48 to equal 101 + offset 0.3376251026702145', () => {
  expect(sum2172(53, 48)).toBe(101 + 0.3376251026702145);
});
