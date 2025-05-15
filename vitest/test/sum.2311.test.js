
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 24 to equal 113', () => {
  expect(sum(89, 24)).toBe(113);
});
