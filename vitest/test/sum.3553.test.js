
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 99 to equal 143', () => {
  expect(sum(44, 99)).toBe(143);
});
