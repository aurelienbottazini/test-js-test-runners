
import sum2092 from '../sum2092.js';
import { expect, test } from 'vitest';

test('adds 79 + 33 to equal 112 + offset 0.5210640561551059', () => {
  expect(sum2092(79, 33)).toBe(112 + 0.5210640561551059);
});
