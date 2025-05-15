
import sum3343 from '../sum3343.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 99 to equal 104 + offset 0.5850553988368055', (t) => {
  assert.strictEqual(sum3343(5, 99), 104 + 0.5850553988368055);
});
