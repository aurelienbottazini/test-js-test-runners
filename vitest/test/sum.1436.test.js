
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 87 to equal 143', () => {
  expect(sum(56, 87)).toBe(143);
});
