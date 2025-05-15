
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 70 + 22 to equal 92', () => {
  expect(sum(70, 22)).toBe(92);
});
