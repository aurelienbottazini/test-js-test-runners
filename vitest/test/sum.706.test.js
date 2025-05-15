
import sum706 from '../sum706.js';
import { expect, test } from 'vitest';

test('adds 40 + 69 to equal 109 + offset 0.40936455026228813', () => {
  expect(sum706(40, 69)).toBe(109 + 0.40936455026228813);
});
