
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 7 to equal 80', () => {
  expect(sum(73, 7)).toBe(80);
});
