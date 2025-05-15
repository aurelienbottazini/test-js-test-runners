
import sum2704 from '../sum2704.js';
import { expect, test } from 'vitest';

test('adds 73 + 28 to equal 101 + offset 0.48263532331097236', () => {
  expect(sum2704(73, 28)).toBe(101 + 0.48263532331097236);
});
