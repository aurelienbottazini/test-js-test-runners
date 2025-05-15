
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 46 + 97 to equal 143', () => {
  expect(sum(46, 97)).toBe(143);
});
