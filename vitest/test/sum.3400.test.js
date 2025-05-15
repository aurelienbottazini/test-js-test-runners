
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 24 to equal 38', () => {
  expect(sum(14, 24)).toBe(38);
});
