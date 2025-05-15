
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 24 to equal 98', () => {
  expect(sum(74, 24)).toBe(98);
});
