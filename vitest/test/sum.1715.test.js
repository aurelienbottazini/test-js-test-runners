
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 96 to equal 168', () => {
  expect(sum(72, 96)).toBe(168);
});
