
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 81 to equal 92', () => {
  expect(sum(11, 81)).toBe(92);
});
