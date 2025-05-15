
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 34 to equal 40', () => {
  expect(sum(6, 34)).toBe(40);
});
