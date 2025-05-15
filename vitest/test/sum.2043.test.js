
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 91 to equal 136', () => {
  expect(sum(45, 91)).toBe(136);
});
