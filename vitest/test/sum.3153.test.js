
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 55 to equal 143', () => {
  expect(sum(88, 55)).toBe(143);
});
