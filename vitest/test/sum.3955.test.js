
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 24 to equal 123', () => {
  expect(sum(99, 24)).toBe(123);
});
