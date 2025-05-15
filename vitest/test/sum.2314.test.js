
import sum2314 from '../sum2314.js';
import { expect, test } from 'vitest';

test('adds 15 + 92 to equal 107 + offset 0.5094541649684955', () => {
  expect(sum2314(15, 92)).toBe(107 + 0.5094541649684955);
});
