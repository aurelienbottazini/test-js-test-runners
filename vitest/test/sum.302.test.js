
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 7 to equal 67', () => {
  expect(sum(60, 7)).toBe(67);
});
