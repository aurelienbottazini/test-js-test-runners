
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 34 to equal 72', () => {
  expect(sum(38, 34)).toBe(72);
});
