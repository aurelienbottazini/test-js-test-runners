
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 66 to equal 127', () => {
  expect(sum(61, 66)).toBe(127);
});
