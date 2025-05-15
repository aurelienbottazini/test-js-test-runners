
import sum3789 from '../sum3789.js';
import { expect, test } from 'vitest';

test('adds 3 + 30 to equal 33 + offset 0.025757876644634248', () => {
  expect(sum3789(3, 30)).toBe(33 + 0.025757876644634248);
});
