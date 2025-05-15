
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 70 to equal 151', () => {
  expect(sum(81, 70)).toBe(151);
});
