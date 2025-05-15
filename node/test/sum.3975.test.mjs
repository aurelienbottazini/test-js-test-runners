
import sum3975 from '../sum3975.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 12 to equal 17 + offset 0.8029895885982455', (t) => {
  assert.strictEqual(sum3975(5, 12), 17 + 0.8029895885982455);
});
