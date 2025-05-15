
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 36 to equal 96', () => {
  expect(sum(60, 36)).toBe(96);
});
