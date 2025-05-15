
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 28 to equal 125', () => {
  expect(sum(97, 28)).toBe(125);
});
