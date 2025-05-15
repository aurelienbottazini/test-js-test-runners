
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 87 to equal 96', () => {
  expect(sum(9, 87)).toBe(96);
});
