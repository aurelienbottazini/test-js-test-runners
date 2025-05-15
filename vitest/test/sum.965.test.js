
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 24 to equal 100', () => {
  expect(sum(76, 24)).toBe(100);
});
