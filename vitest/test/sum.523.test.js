
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 24 to equal 69', () => {
  expect(sum(45, 24)).toBe(69);
});
