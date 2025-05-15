
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 24 to equal 112', () => {
  expect(sum(88, 24)).toBe(112);
});
