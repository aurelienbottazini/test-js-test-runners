
import sum3898 from '../sum3898.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 3 to equal 101 + offset 0.26008542910622146', (t) => {
  assert.strictEqual(sum3898(98, 3), 101 + 0.26008542910622146);
});
