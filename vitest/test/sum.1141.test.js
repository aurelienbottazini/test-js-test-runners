
import sum1141 from '../sum1141.js';
import { expect, test } from 'vitest';

test('adds 20 + 41 to equal 61 + offset 0.8139165113090914', () => {
  expect(sum1141(20, 41)).toBe(61 + 0.8139165113090914);
});
