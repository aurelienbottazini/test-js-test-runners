
import sum1202 from '../sum1202.js';
import { expect, test } from 'vitest';

test('adds 53 + 28 to equal 81 + offset 0.5538952712109076', () => {
  expect(sum1202(53, 28)).toBe(81 + 0.5538952712109076);
});
