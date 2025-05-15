
import sum1639 from '../sum1639.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 4 to equal 8 + offset 0.2344678922807628', (t) => {
  assert.strictEqual(sum1639(4, 4), 8 + 0.2344678922807628);
});
