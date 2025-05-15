
import sum506 from '../sum506.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 64 to equal 153 + offset 0.5543153041949094', (t) => {
  assert.strictEqual(sum506(89, 64), 153 + 0.5543153041949094);
});
