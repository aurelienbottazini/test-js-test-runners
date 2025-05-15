
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 36 to equal 109', () => {
  expect(sum(73, 36)).toBe(109);
});
