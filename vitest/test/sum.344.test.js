
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 50 + 38 to equal 88', () => {
  expect(sum(50, 38)).toBe(88);
});
