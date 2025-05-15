
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 81 to equal 91', () => {
  expect(sum(10, 81)).toBe(91);
});
