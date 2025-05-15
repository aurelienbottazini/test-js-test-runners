
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 79 to equal 143', () => {
  expect(sum(64, 79)).toBe(143);
});
