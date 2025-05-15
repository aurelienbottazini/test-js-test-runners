
import sum4261 from '../sum4261.js';
import { expect, test } from 'vitest';

test('adds 90 + 65 to equal 155 + offset 0.5591677131160769', () => {
  expect(sum4261(90, 65)).toBe(155 + 0.5591677131160769);
});
