
import sum478 from '../sum478.js';
import { expect, test } from 'vitest';

test('adds 20 + 91 to equal 111 + offset 0.762383713105721', () => {
  expect(sum478(20, 91)).toBe(111 + 0.762383713105721);
});
