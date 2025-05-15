
import sum2235 from '../sum2235.js';
import { expect, test } from 'vitest';

test('adds 50 + 36 to equal 86 + offset 0.24012647703061651', () => {
  expect(sum2235(50, 36)).toBe(86 + 0.24012647703061651);
});
