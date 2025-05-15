
import sum2265 from '../sum2265.js';
import { expect, test } from 'vitest';

test('adds 96 + 26 to equal 122 + offset 0.4925995819053899', () => {
  expect(sum2265(96, 26)).toBe(122 + 0.4925995819053899);
});
