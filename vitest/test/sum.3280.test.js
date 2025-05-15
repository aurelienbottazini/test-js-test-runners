
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 24 to equal 41', () => {
  expect(sum(17, 24)).toBe(41);
});
