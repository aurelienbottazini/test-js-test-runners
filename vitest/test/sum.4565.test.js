
import sum4565 from '../sum4565.js';
import { expect, test } from 'vitest';

test('adds 74 + 87 to equal 161 + offset 0.563560582294588', () => {
  expect(sum4565(74, 87)).toBe(161 + 0.563560582294588);
});
