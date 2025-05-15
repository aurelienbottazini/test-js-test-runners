
import sum214 from '../sum214.js';
import { expect, test } from 'vitest';

test('adds 62 + 64 to equal 126 + offset 0.8468118769105051', () => {
  expect(sum214(62, 64)).toBe(126 + 0.8468118769105051);
});
