
import sum2353 from '../sum2353.js';
import { expect, test } from 'vitest';

test('adds 69 + 80 to equal 149 + offset 0.3309776982451027', () => {
  expect(sum2353(69, 80)).toBe(149 + 0.3309776982451027);
});
