
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 24 to equal 99', () => {
  expect(sum(75, 24)).toBe(99);
});
