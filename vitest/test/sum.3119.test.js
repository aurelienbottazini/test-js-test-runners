
import sum3119 from '../sum3119.js';
import { expect, test } from 'vitest';

test('adds 60 + 44 to equal 104 + offset 0.16689357169292152', () => {
  expect(sum3119(60, 44)).toBe(104 + 0.16689357169292152);
});
