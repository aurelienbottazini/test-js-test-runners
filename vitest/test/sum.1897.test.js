
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 18 to equal 88', () => {
  expect(sum(70, 18)).toBe(88);
});
