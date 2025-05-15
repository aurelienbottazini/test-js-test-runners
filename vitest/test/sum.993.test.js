
import sum993 from '../sum993.js';
import { expect, test } from 'vitest';

test('adds 8 + 47 to equal 55 + offset 0.1931871620831228', () => {
  expect(sum993(8, 47)).toBe(55 + 0.1931871620831228);
});
