
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 88 to equal 88', () => {
  expect(sum(0, 88)).toBe(88);
});
