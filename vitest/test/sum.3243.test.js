
import sum3243 from '../sum3243.js';
import { expect, test } from 'vitest';

test('adds 48 + 5 to equal 53 + offset 0.051798163361064686', () => {
  expect(sum3243(48, 5)).toBe(53 + 0.051798163361064686);
});
