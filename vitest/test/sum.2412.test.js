
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 57 to equal 96', () => {
  expect(sum(39, 57)).toBe(96);
});
