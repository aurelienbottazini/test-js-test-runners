
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 62 to equal 143', () => {
  expect(sum(81, 62)).toBe(143);
});
