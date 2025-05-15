
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 66 to equal 121', () => {
  expect(sum(55, 66)).toBe(121);
});
