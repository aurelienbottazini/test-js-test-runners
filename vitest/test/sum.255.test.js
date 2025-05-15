
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 81 to equal 100', () => {
  expect(sum(19, 81)).toBe(100);
});
