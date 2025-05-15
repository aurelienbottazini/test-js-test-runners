
import sum1213 from '../sum1213.js';
import { expect, test } from 'vitest';

test('adds 56 + 71 to equal 127 + offset 0.8630562999069018', () => {
  expect(sum1213(56, 71)).toBe(127 + 0.8630562999069018);
});
