
import sum3162 from '../sum3162.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 75 to equal 139 + offset 0.42994137539012367', (t) => {
  assert.strictEqual(sum3162(64, 75), 139 + 0.42994137539012367);
});
