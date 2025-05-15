
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 24 to equal 44', () => {
  expect(sum(20, 24)).toBe(44);
});
