
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 7 to equal 85', () => {
  expect(sum(78, 7)).toBe(85);
});
