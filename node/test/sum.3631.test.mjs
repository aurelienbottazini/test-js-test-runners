
import sum3631 from '../sum3631.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 42 to equal 115 + offset 0.5030968595585349', (t) => {
  assert.strictEqual(sum3631(73, 42), 115 + 0.5030968595585349);
});
