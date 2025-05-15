
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 34 to equal 99', () => {
  expect(sum(65, 34)).toBe(99);
});
