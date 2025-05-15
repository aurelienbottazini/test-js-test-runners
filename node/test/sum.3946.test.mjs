
import sum3946 from '../sum3946.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 53 to equal 67 + offset 0.10128053523699365', (t) => {
  assert.strictEqual(sum3946(14, 53), 67 + 0.10128053523699365);
});
