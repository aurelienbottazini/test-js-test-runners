
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 81 to equal 180', () => {
  expect(sum(99, 81)).toBe(180);
});
