
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 24 to equal 87', () => {
  expect(sum(63, 24)).toBe(87);
});
