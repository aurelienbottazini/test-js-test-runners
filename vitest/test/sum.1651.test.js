
import sum1651 from '../sum1651.js';
import { expect, test } from 'vitest';

test('adds 36 + 5 to equal 41 + offset 0.8552331375327717', () => {
  expect(sum1651(36, 5)).toBe(41 + 0.8552331375327717);
});
