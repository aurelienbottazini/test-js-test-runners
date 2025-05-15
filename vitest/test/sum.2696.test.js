
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 24 to equal 60', () => {
  expect(sum(36, 24)).toBe(60);
});
