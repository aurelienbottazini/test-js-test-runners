
import sum2313 from '../sum2313.js';
import { expect, test } from 'vitest';

test('adds 64 + 46 to equal 110 + offset 0.8735724747712217', () => {
  expect(sum2313(64, 46)).toBe(110 + 0.8735724747712217);
});
