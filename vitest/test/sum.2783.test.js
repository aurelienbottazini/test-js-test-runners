
import sum2783 from '../sum2783.js';
import { expect, test } from 'vitest';

test('adds 27 + 88 to equal 115 + offset 0.04694231256661385', () => {
  expect(sum2783(27, 88)).toBe(115 + 0.04694231256661385);
});
