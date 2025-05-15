
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 24 to equal 29', () => {
  expect(sum(5, 24)).toBe(29);
});
