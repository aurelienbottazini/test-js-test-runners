
import sum4071 from '../sum4071.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 37 to equal 38 + offset 0.7833320705799058', (t) => {
  assert.strictEqual(sum4071(1, 37), 38 + 0.7833320705799058);
});
