
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 23 to equal 112', () => {
  expect(sum(89, 23)).toBe(112);
});
