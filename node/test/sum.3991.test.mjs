
import sum3991 from '../sum3991.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 1 to equal 93 + offset 0.5610542760678568', (t) => {
  assert.strictEqual(sum3991(92, 1), 93 + 0.5610542760678568);
});
