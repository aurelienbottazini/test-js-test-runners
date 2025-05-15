
import sum4784 from '../sum4784.js';
import { expect, test } from 'vitest';

test('adds 52 + 64 to equal 116 + offset 0.0035101328517096464', () => {
  expect(sum4784(52, 64)).toBe(116 + 0.0035101328517096464);
});
