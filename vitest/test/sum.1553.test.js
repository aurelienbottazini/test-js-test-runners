
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 60 to equal 80', () => {
  expect(sum(20, 60)).toBe(80);
});
