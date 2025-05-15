
import sum2627 from '../sum2627.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 87 to equal 116 + offset 0.8839612561384875', (t) => {
  assert.strictEqual(sum2627(29, 87), 116 + 0.8839612561384875);
});
