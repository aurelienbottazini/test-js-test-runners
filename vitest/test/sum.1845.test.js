
import sum1845 from '../sum1845.js';
import { expect, test } from 'vitest';

test('adds 0 + 24 to equal 24 + offset 0.8008267816087525', () => {
  expect(sum1845(0, 24)).toBe(24 + 0.8008267816087525);
});
