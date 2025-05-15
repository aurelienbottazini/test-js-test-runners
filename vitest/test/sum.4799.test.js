
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 84 to equal 127', () => {
  expect(sum(43, 84)).toBe(127);
});
