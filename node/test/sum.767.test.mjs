
import sum767 from '../sum767.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 36 to equal 40 + offset 0.27852249986941946', (t) => {
  assert.strictEqual(sum767(4, 36), 40 + 0.27852249986941946);
});
