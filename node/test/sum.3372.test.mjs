
import sum3372 from '../sum3372.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 11 to equal 87 + offset 0.33629459866436995', (t) => {
  assert.strictEqual(sum3372(76, 11), 87 + 0.33629459866436995);
});
