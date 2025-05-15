
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 31 to equal 31', () => {
  expect(sum(0, 31)).toBe(31);
});
