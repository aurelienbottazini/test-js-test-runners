
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 42 to equal 96', () => {
  expect(sum(54, 42)).toBe(96);
});
