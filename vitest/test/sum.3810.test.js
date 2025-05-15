
import sum3810 from '../sum3810.js';
import { expect, test } from 'vitest';

test('adds 37 + 46 to equal 83 + offset 0.4953862044818734', () => {
  expect(sum3810(37, 46)).toBe(83 + 0.4953862044818734);
});
