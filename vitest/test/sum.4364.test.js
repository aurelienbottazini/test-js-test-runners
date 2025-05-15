
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 24 to equal 50', () => {
  expect(sum(26, 24)).toBe(50);
});
