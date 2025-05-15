
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 24 to equal 72', () => {
  expect(sum(48, 24)).toBe(72);
});
