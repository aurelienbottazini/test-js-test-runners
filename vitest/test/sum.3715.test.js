
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 98 to equal 143', () => {
  expect(sum(45, 98)).toBe(143);
});
