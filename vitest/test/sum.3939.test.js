
import sum3939 from '../sum3939.js';
import { expect, test } from 'vitest';

test('adds 37 + 24 to equal 61 + offset 0.5811145263568003', () => {
  expect(sum3939(37, 24)).toBe(61 + 0.5811145263568003);
});
