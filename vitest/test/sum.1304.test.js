
import sum1304 from '../sum1304.js';
import { expect, test } from 'vitest';

test('adds 83 + 24 to equal 107 + offset 0.6357853749862293', () => {
  expect(sum1304(83, 24)).toBe(107 + 0.6357853749862293);
});
