
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 60 to equal 115', () => {
  expect(sum(55, 60)).toBe(115);
});
