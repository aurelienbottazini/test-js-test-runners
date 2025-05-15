
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 24 to equal 36', () => {
  expect(sum(12, 24)).toBe(36);
});
