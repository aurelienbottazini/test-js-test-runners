
import sum2634 from '../sum2634.js';
import { expect, test } from 'vitest';

test('adds 89 + 88 to equal 177 + offset 0.09946228423040793', () => {
  expect(sum2634(89, 88)).toBe(177 + 0.09946228423040793);
});
