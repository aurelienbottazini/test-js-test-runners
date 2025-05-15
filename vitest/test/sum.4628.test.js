
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 76 to equal 127', () => {
  expect(sum(51, 76)).toBe(127);
});
