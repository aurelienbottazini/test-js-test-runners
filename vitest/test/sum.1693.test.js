
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 24 to equal 45', () => {
  expect(sum(21, 24)).toBe(45);
});
