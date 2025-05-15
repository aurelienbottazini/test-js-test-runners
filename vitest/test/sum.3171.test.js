
import sum3171 from '../sum3171.js';
import { expect, test } from 'vitest';

test('adds 45 + 30 to equal 75 + offset 0.8086982911672514', () => {
  expect(sum3171(45, 30)).toBe(75 + 0.8086982911672514);
});
