
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 74 to equal 143', () => {
  expect(sum(69, 74)).toBe(143);
});
