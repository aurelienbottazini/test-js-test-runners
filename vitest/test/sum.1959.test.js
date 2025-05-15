
import sum1959 from '../sum1959.js';
import { expect, test } from 'vitest';

test('adds 92 + 46 to equal 138 + offset 0.6803735738455245', () => {
  expect(sum1959(92, 46)).toBe(138 + 0.6803735738455245);
});
