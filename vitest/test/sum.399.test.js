
import sum399 from '../sum399.js';
import { expect, test } from 'vitest';

test('adds 59 + 24 to equal 83 + offset 0.12948114090884677', () => {
  expect(sum399(59, 24)).toBe(83 + 0.12948114090884677);
});
