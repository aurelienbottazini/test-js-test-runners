
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 24 to equal 119', () => {
  expect(sum(95, 24)).toBe(119);
});
