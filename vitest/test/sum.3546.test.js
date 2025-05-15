
import sum3546 from '../sum3546.js';
import { expect, test } from 'vitest';

test('adds 67 + 59 to equal 126 + offset 0.2949505446613919', () => {
  expect(sum3546(67, 59)).toBe(126 + 0.2949505446613919);
});
