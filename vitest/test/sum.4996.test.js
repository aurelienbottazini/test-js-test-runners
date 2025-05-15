
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 31 to equal 130', () => {
  expect(sum(99, 31)).toBe(130);
});
