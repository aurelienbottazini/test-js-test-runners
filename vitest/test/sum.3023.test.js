
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 43 to equal 65', () => {
  expect(sum(22, 43)).toBe(65);
});
