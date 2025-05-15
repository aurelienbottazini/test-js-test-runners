
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 74 to equal 121', () => {
  expect(sum(47, 74)).toBe(121);
});
