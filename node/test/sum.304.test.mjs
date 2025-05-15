
import sum304 from '../sum304.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 73 to equal 129 + offset 0.7666381519655643', (t) => {
  assert.strictEqual(sum304(56, 73), 129 + 0.7666381519655643);
});
