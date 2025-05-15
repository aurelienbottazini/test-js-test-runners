
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 93 to equal 154', () => {
  expect(sum(61, 93)).toBe(154);
});
