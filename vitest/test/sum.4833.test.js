
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 70 to equal 88', () => {
  expect(sum(18, 70)).toBe(88);
});
