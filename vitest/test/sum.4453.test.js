
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 96 to equal 153', () => {
  expect(sum(57, 96)).toBe(153);
});
