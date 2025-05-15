
import sum3370 from '../sum3370.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 64 to equal 109 + offset 0.36955076978488344', (t) => {
  assert.strictEqual(sum3370(45, 64), 109 + 0.36955076978488344);
});
