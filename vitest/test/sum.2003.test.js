
import sum2003 from '../sum2003.js';
import { expect, test } from 'vitest';

test('adds 79 + 52 to equal 131 + offset 0.7281678844817351', () => {
  expect(sum2003(79, 52)).toBe(131 + 0.7281678844817351);
});
