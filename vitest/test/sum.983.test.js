
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 73 to equal 143', () => {
  expect(sum(70, 73)).toBe(143);
});
