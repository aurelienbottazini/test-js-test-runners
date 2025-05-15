
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 84 to equal 143', () => {
  expect(sum(59, 84)).toBe(143);
});
