
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 96 to equal 192', () => {
  expect(sum(96, 96)).toBe(192);
});
