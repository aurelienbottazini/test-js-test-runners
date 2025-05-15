
import sum3106 from '../sum3106.js';
import { expect, test } from 'vitest';

test('adds 60 + 27 to equal 87 + offset 0.16689214326117263', () => {
  expect(sum3106(60, 27)).toBe(87 + 0.16689214326117263);
});
