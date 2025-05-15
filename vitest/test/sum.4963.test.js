
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 63 to equal 151', () => {
  expect(sum(88, 63)).toBe(151);
});
