
import sum3409 from '../sum3409.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 83 to equal 114 + offset 0.9886570539757187', (t) => {
  assert.strictEqual(sum3409(31, 83), 114 + 0.9886570539757187);
});
