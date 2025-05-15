
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 48 to equal 96', () => {
  expect(sum(48, 48)).toBe(96);
});
