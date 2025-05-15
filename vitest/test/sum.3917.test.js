
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 60 to equal 95', () => {
  expect(sum(35, 60)).toBe(95);
});
