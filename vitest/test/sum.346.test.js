
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 24 to equal 121', () => {
  expect(sum(97, 24)).toBe(121);
});
