
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 24 to equal 79', () => {
  expect(sum(55, 24)).toBe(79);
});
