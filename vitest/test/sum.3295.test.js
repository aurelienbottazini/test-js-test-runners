
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 21 to equal 109', () => {
  expect(sum(88, 21)).toBe(109);
});
