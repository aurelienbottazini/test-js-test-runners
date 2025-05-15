
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 96 to equal 154', () => {
  expect(sum(58, 96)).toBe(154);
});
