
import sum4154 from '../sum4154.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 47 to equal 139 + offset 0.08671564031249013', (t) => {
  assert.strictEqual(sum4154(92, 47), 139 + 0.08671564031249013);
});
