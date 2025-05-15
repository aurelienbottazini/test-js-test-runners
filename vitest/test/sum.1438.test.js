
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 95 to equal 188', () => {
  expect(sum(93, 95)).toBe(188);
});
