
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 92 to equal 154', () => {
  expect(sum(62, 92)).toBe(154);
});
