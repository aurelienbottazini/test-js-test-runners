
import sum83 from '../sum83.js';
import { expect, test } from 'vitest';

test('adds 20 + 88 to equal 108 + offset 0.3949393876706946', () => {
  expect(sum83(20, 88)).toBe(108 + 0.3949393876706946);
});
