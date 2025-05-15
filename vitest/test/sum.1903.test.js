
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 18 to equal 83', () => {
  expect(sum(65, 18)).toBe(83);
});
