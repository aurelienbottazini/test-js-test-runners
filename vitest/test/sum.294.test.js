
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 96 to equal 106', () => {
  expect(sum(10, 96)).toBe(106);
});
