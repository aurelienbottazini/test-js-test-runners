
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 24 to equal 110', () => {
  expect(sum(86, 24)).toBe(110);
});
