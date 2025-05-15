
import sum2881 from '../sum2881.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 2 to equal 34 + offset 0.21474997773786353', (t) => {
  assert.strictEqual(sum2881(32, 2), 34 + 0.21474997773786353);
});
