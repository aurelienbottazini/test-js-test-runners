
import sum633 from '../sum633.js';
import { expect, test } from 'vitest';

test('adds 87 + 30 to equal 117 + offset 0.9465178700977768', () => {
  expect(sum633(87, 30)).toBe(117 + 0.9465178700977768);
});
