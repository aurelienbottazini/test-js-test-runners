
import sum425 from '../sum425.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 77 to equal 129 + offset 0.3257582264431448', (t) => {
  assert.strictEqual(sum425(52, 77), 129 + 0.3257582264431448);
});
