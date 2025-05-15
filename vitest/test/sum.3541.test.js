
import sum3541 from '../sum3541.js';
import { expect, test } from 'vitest';

test('adds 4 + 93 to equal 97 + offset 0.008288726354671594', () => {
  expect(sum3541(4, 93)).toBe(97 + 0.008288726354671594);
});
