
import sum2121 from '../sum2121.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 5 to equal 19 + offset 0.37230056065889505', (t) => {
  assert.strictEqual(sum2121(14, 5), 19 + 0.37230056065889505);
});
