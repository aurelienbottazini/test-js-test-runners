
import sum213 from '../sum213.js';
import { expect, test } from 'vitest';

test('adds 43 + 7 to equal 50 + offset 0.10078124930322441', () => {
  expect(sum213(43, 7)).toBe(50 + 0.10078124930322441);
});
