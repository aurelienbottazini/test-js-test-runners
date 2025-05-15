
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 24 to equal 58', () => {
  expect(sum(34, 24)).toBe(58);
});
