
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 62 to equal 151', () => {
  expect(sum(89, 62)).toBe(151);
});
