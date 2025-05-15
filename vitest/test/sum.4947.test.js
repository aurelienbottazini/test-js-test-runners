
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 24 to equal 104', () => {
  expect(sum(80, 24)).toBe(104);
});
