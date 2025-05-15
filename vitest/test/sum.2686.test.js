
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 39 to equal 127', () => {
  expect(sum(88, 39)).toBe(127);
});
