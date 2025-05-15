
import sum4039 from '../sum4039.js';
import { expect, test } from 'vitest';

test('adds 15 + 76 to equal 91 + offset 0.6387315098045456', () => {
  expect(sum4039(15, 76)).toBe(91 + 0.6387315098045456);
});
