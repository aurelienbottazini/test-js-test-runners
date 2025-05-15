
import sum2870 from '../sum2870.js';
import { expect, test } from 'vitest';

test('adds 9 + 38 to equal 47 + offset 0.4719069067798325', () => {
  expect(sum2870(9, 38)).toBe(47 + 0.4719069067798325);
});
