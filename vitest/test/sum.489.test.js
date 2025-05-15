
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 24 to equal 84', () => {
  expect(sum(60, 24)).toBe(84);
});
