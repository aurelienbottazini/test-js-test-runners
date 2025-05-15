
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 60 to equal 127', () => {
  expect(sum(67, 60)).toBe(127);
});
