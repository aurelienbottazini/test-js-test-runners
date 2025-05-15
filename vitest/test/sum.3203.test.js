
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 59 to equal 143', () => {
  expect(sum(84, 59)).toBe(143);
});
