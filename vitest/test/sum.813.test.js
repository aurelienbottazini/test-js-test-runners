
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 95 to equal 142', () => {
  expect(sum(47, 95)).toBe(142);
});
