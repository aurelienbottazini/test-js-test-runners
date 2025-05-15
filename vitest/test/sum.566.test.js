
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 67 to equal 154', () => {
  expect(sum(87, 67)).toBe(154);
});
