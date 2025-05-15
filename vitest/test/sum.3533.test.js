
import sum3533 from '../sum3533.js';
import { expect, test } from 'vitest';

test('adds 85 + 30 to equal 115 + offset 0.9184871186119717', () => {
  expect(sum3533(85, 30)).toBe(115 + 0.9184871186119717);
});
