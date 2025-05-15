
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 24 to equal 32', () => {
  expect(sum(8, 24)).toBe(32);
});
