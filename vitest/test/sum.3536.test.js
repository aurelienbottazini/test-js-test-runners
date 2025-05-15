
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 81 to equal 142', () => {
  expect(sum(61, 81)).toBe(142);
});
