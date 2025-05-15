
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 52 to equal 99', () => {
  expect(sum(47, 52)).toBe(99);
});
