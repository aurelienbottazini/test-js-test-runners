
import sum2260 from '../sum2260.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 95 to equal 184 + offset 0.6670540256503198', (t) => {
  assert.strictEqual(sum2260(89, 95), 184 + 0.6670540256503198);
});
