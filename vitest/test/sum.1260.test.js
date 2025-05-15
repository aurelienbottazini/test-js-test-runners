
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 24 to equal 63', () => {
  expect(sum(39, 24)).toBe(63);
});
