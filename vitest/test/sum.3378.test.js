
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 24 to equal 108', () => {
  expect(sum(84, 24)).toBe(108);
});
