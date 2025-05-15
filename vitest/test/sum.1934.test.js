
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 27 to equal 96', () => {
  expect(sum(69, 27)).toBe(96);
});
