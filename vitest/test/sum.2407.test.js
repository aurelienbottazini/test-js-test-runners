
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 24 to equal 107', () => {
  expect(sum(83, 24)).toBe(107);
});
