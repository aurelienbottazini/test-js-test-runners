
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 24 to equal 117', () => {
  expect(sum(93, 24)).toBe(117);
});
