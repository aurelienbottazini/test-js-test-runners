
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 96 to equal 158', () => {
  expect(sum(62, 96)).toBe(158);
});
