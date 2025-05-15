
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 29 to equal 60', () => {
  expect(sum(31, 29)).toBe(60);
});
