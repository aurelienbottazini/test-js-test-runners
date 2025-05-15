
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 60 to equal 100', () => {
  expect(sum(40, 60)).toBe(100);
});
