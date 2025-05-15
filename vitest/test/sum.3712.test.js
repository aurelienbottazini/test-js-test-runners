
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 50 to equal 121', () => {
  expect(sum(71, 50)).toBe(121);
});
