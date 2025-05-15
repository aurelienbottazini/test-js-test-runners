
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 99 to equal 130', () => {
  expect(sum(31, 99)).toBe(130);
});
