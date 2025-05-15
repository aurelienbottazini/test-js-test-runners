
import sum1049 from '../sum1049.js';
import { expect, test } from 'vitest';

test('adds 56 + 99 to equal 155 + offset 0.05353801091451338', () => {
  expect(sum1049(56, 99)).toBe(155 + 0.05353801091451338);
});
