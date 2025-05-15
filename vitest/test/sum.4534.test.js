
import sum4534 from '../sum4534.js';
import { expect, test } from 'vitest';

test('adds 84 + 52 to equal 136 + offset 0.5481960564759095', () => {
  expect(sum4534(84, 52)).toBe(136 + 0.5481960564759095);
});
