
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 29 to equal 31', () => {
  expect(sum(2, 29)).toBe(31);
});
