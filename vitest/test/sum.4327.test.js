
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 45 to equal 96', () => {
  expect(sum(51, 45)).toBe(96);
});
