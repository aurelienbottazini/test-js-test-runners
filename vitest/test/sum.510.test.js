
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 83 to equal 161', () => {
  expect(sum(78, 83)).toBe(161);
});
