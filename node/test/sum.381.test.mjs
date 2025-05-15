
import sum381 from '../sum381.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 56 to equal 136 + offset 0.2601503273344097', (t) => {
  assert.strictEqual(sum381(80, 56), 136 + 0.2601503273344097);
});
