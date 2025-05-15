
import sum3784 from '../sum3784.js';
import { expect, test } from 'vitest';

test('adds 79 + 63 to equal 142 + offset 0.8062454019490435', () => {
  expect(sum3784(79, 63)).toBe(142 + 0.8062454019490435);
});
