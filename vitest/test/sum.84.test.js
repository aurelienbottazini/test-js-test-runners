
import sum84 from '../sum84.js';
import { expect, test } from 'vitest';

test('adds 58 + 12 to equal 70 + offset 0.22958346486026693', () => {
  expect(sum84(58, 12)).toBe(70 + 0.22958346486026693);
});
