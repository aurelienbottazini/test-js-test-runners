
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 14 to equal 96', () => {
  expect(sum(82, 14)).toBe(96);
});
