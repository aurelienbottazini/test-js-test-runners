
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 84 to equal 121', () => {
  expect(sum(37, 84)).toBe(121);
});
