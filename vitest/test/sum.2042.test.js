
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 90 to equal 121', () => {
  expect(sum(31, 90)).toBe(121);
});
