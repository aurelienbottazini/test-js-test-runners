
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 60 to equal 67', () => {
  expect(sum(7, 60)).toBe(67);
});
