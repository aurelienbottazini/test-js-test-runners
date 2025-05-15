
import sum2439 from '../sum2439.js';
import { expect, test } from 'vitest';

test('adds 73 + 86 to equal 159 + offset 0.786518298072717', () => {
  expect(sum2439(73, 86)).toBe(159 + 0.786518298072717);
});
