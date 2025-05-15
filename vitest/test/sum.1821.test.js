
import sum1821 from '../sum1821.js';
import { expect, test } from 'vitest';

test('adds 83 + 40 to equal 123 + offset 0.16222829615794587', () => {
  expect(sum1821(83, 40)).toBe(123 + 0.16222829615794587);
});
