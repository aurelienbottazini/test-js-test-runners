
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 60 to equal 60', () => {
  expect(sum(0, 60)).toBe(60);
});
