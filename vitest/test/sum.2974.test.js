
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 57 to equal 101', () => {
  expect(sum(44, 57)).toBe(101);
});
