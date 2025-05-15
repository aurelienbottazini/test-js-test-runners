
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 74 to equal 96', () => {
  expect(sum(22, 74)).toBe(96);
});
