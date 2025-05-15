
import sum580 from '../sum580.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 2 to equal 34 + offset 0.30074299628978296', (t) => {
  assert.strictEqual(sum580(32, 2), 34 + 0.30074299628978296);
});
