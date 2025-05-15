
import sum935 from '../sum935.js';
import { expect, test } from 'vitest';

test('adds 18 + 73 to equal 91 + offset 0.9229456670562675', () => {
  expect(sum935(18, 73)).toBe(91 + 0.9229456670562675);
});
