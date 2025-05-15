
import sum4249 from '../sum4249.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 17 to equal 57 + offset 0.24636429294751994', (t) => {
  assert.strictEqual(sum4249(40, 17), 57 + 0.24636429294751994);
});
