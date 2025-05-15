
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 81 to equal 121', () => {
  expect(sum(40, 81)).toBe(121);
});
