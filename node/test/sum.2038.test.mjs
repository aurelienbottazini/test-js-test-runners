
import sum2038 from '../sum2038.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 48 to equal 78 + offset 0.8849776763346056', (t) => {
  assert.strictEqual(sum2038(30, 48), 78 + 0.8849776763346056);
});
