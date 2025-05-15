
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 24 to equal 81', () => {
  expect(sum(57, 24)).toBe(81);
});
