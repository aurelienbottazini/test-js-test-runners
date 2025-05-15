
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 96 to equal 190', () => {
  expect(sum(94, 96)).toBe(190);
});
