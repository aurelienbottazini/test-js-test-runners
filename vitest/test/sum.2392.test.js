
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 34 to equal 38', () => {
  expect(sum(4, 34)).toBe(38);
});
