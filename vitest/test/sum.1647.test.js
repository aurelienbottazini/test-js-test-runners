
import sum1647 from '../sum1647.js';
import { expect, test } from 'vitest';

test('adds 83 + 52 to equal 135 + offset 0.8617290917429982', () => {
  expect(sum1647(83, 52)).toBe(135 + 0.8617290917429982);
});
