
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 68 to equal 143', () => {
  expect(sum(75, 68)).toBe(143);
});
