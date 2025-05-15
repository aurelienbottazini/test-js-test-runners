
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 90 to equal 143', () => {
  expect(sum(53, 90)).toBe(143);
});
