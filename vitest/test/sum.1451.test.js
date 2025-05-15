
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 61 to equal 154', () => {
  expect(sum(93, 61)).toBe(154);
});
