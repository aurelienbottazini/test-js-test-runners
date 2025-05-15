
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 19 to equal 39', () => {
  expect(sum(20, 19)).toBe(39);
});
