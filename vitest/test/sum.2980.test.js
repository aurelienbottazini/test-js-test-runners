
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 10 to equal 107', () => {
  expect(sum(97, 10)).toBe(107);
});
