
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 96 to equal 174', () => {
  expect(sum(78, 96)).toBe(174);
});
