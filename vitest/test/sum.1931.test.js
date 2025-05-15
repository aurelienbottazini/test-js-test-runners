
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 29 to equal 29', () => {
  expect(sum(0, 29)).toBe(29);
});
