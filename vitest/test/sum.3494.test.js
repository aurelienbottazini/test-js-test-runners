
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 85 to equal 143', () => {
  expect(sum(58, 85)).toBe(143);
});
