
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 24 to equal 67', () => {
  expect(sum(43, 24)).toBe(67);
});
