
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 24 to equal 73', () => {
  expect(sum(49, 24)).toBe(73);
});
