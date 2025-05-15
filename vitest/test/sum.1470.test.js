
import sum1470 from '../sum1470.js';
import { expect, test } from 'vitest';

test('adds 23 + 46 to equal 69 + offset 0.584730007495016', () => {
  expect(sum1470(23, 46)).toBe(69 + 0.584730007495016);
});
