
import sum3209 from '../sum3209.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 62 to equal 139 + offset 0.32973601742068037', (t) => {
  assert.strictEqual(sum3209(77, 62), 139 + 0.32973601742068037);
});
