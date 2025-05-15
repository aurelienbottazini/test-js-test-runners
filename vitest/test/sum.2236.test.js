
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 65 to equal 143', () => {
  expect(sum(78, 65)).toBe(143);
});
