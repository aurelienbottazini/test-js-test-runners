
import sum4347 from '../sum4347.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 83 to equal 152 + offset 0.34877362836416037', (t) => {
  assert.strictEqual(sum4347(69, 83), 152 + 0.34877362836416037);
});
