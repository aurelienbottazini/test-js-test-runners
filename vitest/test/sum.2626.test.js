
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 96 to equal 150', () => {
  expect(sum(54, 96)).toBe(150);
});
