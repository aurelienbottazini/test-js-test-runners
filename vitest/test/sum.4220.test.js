
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 19 to equal 115', () => {
  expect(sum(96, 19)).toBe(115);
});
