
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 24 to equal 66', () => {
  expect(sum(42, 24)).toBe(66);
});
