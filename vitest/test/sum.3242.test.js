
import sum3242 from '../sum3242.js';
import { expect, test } from 'vitest';

test('adds 54 + 53 to equal 107 + offset 0.42297034629203223', () => {
  expect(sum3242(54, 53)).toBe(107 + 0.42297034629203223);
});
