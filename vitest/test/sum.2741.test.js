
import sum2741 from '../sum2741.js';
import { expect, test } from 'vitest';

test('adds 92 + 65 to equal 157 + offset 0.30645704909049165', () => {
  expect(sum2741(92, 65)).toBe(157 + 0.30645704909049165);
});
