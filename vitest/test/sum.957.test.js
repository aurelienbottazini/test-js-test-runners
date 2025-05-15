
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 24 to equal 39', () => {
  expect(sum(15, 24)).toBe(39);
});
