
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 52 to equal 96', () => {
  expect(sum(44, 52)).toBe(96);
});
