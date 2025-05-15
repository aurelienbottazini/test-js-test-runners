
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 34 to equal 109', () => {
  expect(sum(75, 34)).toBe(109);
});
