
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 29 to equal 121', () => {
  expect(sum(92, 29)).toBe(121);
});
