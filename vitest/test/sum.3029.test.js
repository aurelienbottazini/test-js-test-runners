
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 92 to equal 143', () => {
  expect(sum(51, 92)).toBe(143);
});
