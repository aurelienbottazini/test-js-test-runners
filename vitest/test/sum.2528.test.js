
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 34 to equal 119', () => {
  expect(sum(85, 34)).toBe(119);
});
