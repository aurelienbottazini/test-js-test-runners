
import sum1372 from '../sum1372.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 14 to equal 79 + offset 0.8420079174913995', (t) => {
  assert.strictEqual(sum1372(65, 14), 79 + 0.8420079174913995);
});
