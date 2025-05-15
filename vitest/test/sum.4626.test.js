
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 24 to equal 80', () => {
  expect(sum(56, 24)).toBe(80);
});
