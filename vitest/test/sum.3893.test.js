
import sum3893 from '../sum3893.js';
import { expect, test } from 'vitest';

test('adds 75 + 35 to equal 110 + offset 0.810447017096554', () => {
  expect(sum3893(75, 35)).toBe(110 + 0.810447017096554);
});
