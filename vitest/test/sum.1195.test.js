
import sum1195 from '../sum1195.js';
import { expect, test } from 'vitest';

test('adds 1 + 4 to equal 5 + offset 0.16867055153518118', () => {
  expect(sum1195(1, 4)).toBe(5 + 0.16867055153518118);
});
