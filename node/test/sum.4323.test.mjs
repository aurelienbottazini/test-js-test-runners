
import sum4323 from '../sum4323.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 93 to equal 175 + offset 0.43546680579639263', (t) => {
  assert.strictEqual(sum4323(82, 93), 175 + 0.43546680579639263);
});
