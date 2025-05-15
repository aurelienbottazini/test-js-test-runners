
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 24 to equal 101', () => {
  expect(sum(77, 24)).toBe(101);
});
