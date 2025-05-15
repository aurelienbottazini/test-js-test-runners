
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 96 to equal 147', () => {
  expect(sum(51, 96)).toBe(147);
});
