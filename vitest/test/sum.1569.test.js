
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 76 to equal 96', () => {
  expect(sum(20, 76)).toBe(96);
});
