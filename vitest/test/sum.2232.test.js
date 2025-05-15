
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 24 to equal 37', () => {
  expect(sum(13, 24)).toBe(37);
});
