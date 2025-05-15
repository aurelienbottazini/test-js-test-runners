
import sum3312 from '../sum3312.js';
import { expect, test } from 'vitest';

test('adds 25 + 30 to equal 55 + offset 0.9748431394009692', () => {
  expect(sum3312(25, 30)).toBe(55 + 0.9748431394009692);
});
