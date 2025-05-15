
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 96 to equal 140', () => {
  expect(sum(44, 96)).toBe(140);
});
