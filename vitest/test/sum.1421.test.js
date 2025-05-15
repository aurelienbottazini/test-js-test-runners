
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 7 to equal 96', () => {
  expect(sum(89, 7)).toBe(96);
});
