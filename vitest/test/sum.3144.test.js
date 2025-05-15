
import sum3144 from '../sum3144.js';
import { expect, test } from 'vitest';

test('adds 30 + 30 to equal 60 + offset 0.8972293021356667', () => {
  expect(sum3144(30, 30)).toBe(60 + 0.8972293021356667);
});
