
import sum2533 from '../sum2533.js';
import { expect, test } from 'vitest';

test('adds 29 + 10 to equal 39 + offset 0.516393523193099', () => {
  expect(sum2533(29, 10)).toBe(39 + 0.516393523193099);
});
