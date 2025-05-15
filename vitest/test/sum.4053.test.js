
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 64 to equal 143', () => {
  expect(sum(79, 64)).toBe(143);
});
