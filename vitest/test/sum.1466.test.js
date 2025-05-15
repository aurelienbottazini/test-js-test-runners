
import sum1466 from '../sum1466.js';
import { expect, test } from 'vitest';

test('adds 46 + 47 to equal 93 + offset 0.4983155058592502', () => {
  expect(sum1466(46, 47)).toBe(93 + 0.4983155058592502);
});
