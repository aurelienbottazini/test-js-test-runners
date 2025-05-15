
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 29 to equal 81', () => {
  expect(sum(52, 29)).toBe(81);
});
