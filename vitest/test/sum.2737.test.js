
import sum2737 from '../sum2737.js';
import { expect, test } from 'vitest';

test('adds 13 + 96 to equal 109 + offset 0.9310795339448029', () => {
  expect(sum2737(13, 96)).toBe(109 + 0.9310795339448029);
});
