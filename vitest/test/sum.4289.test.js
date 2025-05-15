
import sum4289 from '../sum4289.js';
import { expect, test } from 'vitest';

test('adds 12 + 9 to equal 21 + offset 0.03535545588178479', () => {
  expect(sum4289(12, 9)).toBe(21 + 0.03535545588178479);
});
