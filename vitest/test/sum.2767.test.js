
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 24 to equal 105', () => {
  expect(sum(81, 24)).toBe(105);
});
