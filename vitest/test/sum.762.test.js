
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 75 to equal 87', () => {
  expect(sum(12, 75)).toBe(87);
});
