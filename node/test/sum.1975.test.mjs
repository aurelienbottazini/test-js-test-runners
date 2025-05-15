
import sum1975 from '../sum1975.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 41 to equal 135 + offset 0.3788245888606049', (t) => {
  assert.strictEqual(sum1975(94, 41), 135 + 0.3788245888606049);
});
