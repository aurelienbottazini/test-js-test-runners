
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 57 to equal 88', () => {
  expect(sum(31, 57)).toBe(88);
});
