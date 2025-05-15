
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 69 to equal 143', () => {
  expect(sum(74, 69)).toBe(143);
});
