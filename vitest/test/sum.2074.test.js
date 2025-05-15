
import sum2074 from '../sum2074.js';
import { expect, test } from 'vitest';

test('adds 72 + 91 to equal 163 + offset 0.05409364324437438', () => {
  expect(sum2074(72, 91)).toBe(163 + 0.05409364324437438);
});
