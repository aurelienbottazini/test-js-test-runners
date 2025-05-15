
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 48 to equal 67', () => {
  expect(sum(19, 48)).toBe(67);
});
