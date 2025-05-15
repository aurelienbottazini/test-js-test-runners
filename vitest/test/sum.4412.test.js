
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 1 to equal 31', () => {
  expect(sum(30, 1)).toBe(31);
});
