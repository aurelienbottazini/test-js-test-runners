
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 24 to equal 115', () => {
  expect(sum(91, 24)).toBe(115);
});
