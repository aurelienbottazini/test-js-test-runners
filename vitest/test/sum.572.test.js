
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 55 to equal 121', () => {
  expect(sum(66, 55)).toBe(121);
});
