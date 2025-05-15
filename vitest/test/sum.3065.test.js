
import sum3065 from '../sum3065.js';
import { expect, test } from 'vitest';

test('adds 72 + 31 to equal 103 + offset 0.6027269874661447', () => {
  expect(sum3065(72, 31)).toBe(103 + 0.6027269874661447);
});
