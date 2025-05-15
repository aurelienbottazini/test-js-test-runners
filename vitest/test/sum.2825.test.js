
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 96 to equal 115', () => {
  expect(sum(19, 96)).toBe(115);
});
