
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 84 to equal 154', () => {
  expect(sum(70, 84)).toBe(154);
});
