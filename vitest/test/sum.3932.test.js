
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 4 to equal 96', () => {
  expect(sum(92, 4)).toBe(96);
});
