
import sum2968 from '../sum2968.js';
import { expect, test } from 'vitest';

test('adds 60 + 52 to equal 112 + offset 0.10088372577223448', () => {
  expect(sum2968(60, 52)).toBe(112 + 0.10088372577223448);
});
