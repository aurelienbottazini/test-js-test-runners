
import sum3008 from '../sum3008.js';
import { expect, test } from 'vitest';

test('adds 74 + 19 to equal 93 + offset 0.14697380750009337', () => {
  expect(sum3008(74, 19)).toBe(93 + 0.14697380750009337);
});
