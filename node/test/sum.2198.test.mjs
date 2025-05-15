
import sum2198 from '../sum2198.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 97 to equal 132 + offset 0.566023373076126', (t) => {
  assert.strictEqual(sum2198(35, 97), 132 + 0.566023373076126);
});
