
import sum651 from '../sum651.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 83 to equal 102 + offset 0.21180103081625024', (t) => {
  assert.strictEqual(sum651(19, 83), 102 + 0.21180103081625024);
});
