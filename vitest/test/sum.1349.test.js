
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 96 to equal 188', () => {
  expect(sum(92, 96)).toBe(188);
});
