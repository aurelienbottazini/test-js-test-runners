
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 13 + 83 to equal 96', () => {
  expect(sum(13, 83)).toBe(96);
});
