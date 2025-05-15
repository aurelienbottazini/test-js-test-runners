
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 63 to equal 143', () => {
  expect(sum(80, 63)).toBe(143);
});
