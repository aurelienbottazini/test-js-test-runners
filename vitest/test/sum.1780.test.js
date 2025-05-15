
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 72 to equal 143', () => {
  expect(sum(71, 72)).toBe(143);
});
