
import sum995 from '../sum995.js';
import { expect, test } from 'vitest';

test('adds 86 + 24 to equal 110 + offset 0.6565137258305525', () => {
  expect(sum995(86, 24)).toBe(110 + 0.6565137258305525);
});
