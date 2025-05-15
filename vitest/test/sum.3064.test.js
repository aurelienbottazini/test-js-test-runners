
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 96 to equal 126', () => {
  expect(sum(30, 96)).toBe(126);
});
