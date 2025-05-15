
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 74 to equal 154', () => {
  expect(sum(80, 74)).toBe(154);
});
