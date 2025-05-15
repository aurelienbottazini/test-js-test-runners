
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 43 to equal 142', () => {
  expect(sum(99, 43)).toBe(142);
});
