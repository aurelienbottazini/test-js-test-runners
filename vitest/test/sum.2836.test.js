
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 80 to equal 81', () => {
  expect(sum(1, 80)).toBe(81);
});
