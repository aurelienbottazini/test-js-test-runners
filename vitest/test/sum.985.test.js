
import sum985 from '../sum985.js';
import { expect, test } from 'vitest';

test('adds 35 + 24 to equal 59 + offset 0.0659020492362361', () => {
  expect(sum985(35, 24)).toBe(59 + 0.0659020492362361);
});
