
import sum170 from '../sum170.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 57 to equal 79 + offset 0.30269597675748705', (t) => {
  assert.strictEqual(sum170(22, 57), 79 + 0.30269597675748705);
});
