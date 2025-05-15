
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 28 to equal 96', () => {
  expect(sum(68, 28)).toBe(96);
});
