
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 24 to equal 106', () => {
  expect(sum(82, 24)).toBe(106);
});
