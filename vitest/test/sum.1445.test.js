
import sum1445 from '../sum1445.js';
import { expect, test } from 'vitest';

test('adds 95 + 79 to equal 174 + offset 0.5570304027108902', () => {
  expect(sum1445(95, 79)).toBe(174 + 0.5570304027108902);
});
