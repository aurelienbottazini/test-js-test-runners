
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 7 to equal 94', () => {
  expect(sum(87, 7)).toBe(94);
});
