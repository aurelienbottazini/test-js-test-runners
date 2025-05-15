
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 34 to equal 127', () => {
  expect(sum(93, 34)).toBe(127);
});
