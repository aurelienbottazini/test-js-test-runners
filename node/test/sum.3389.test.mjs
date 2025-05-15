
import sum3389 from '../sum3389.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 67 to equal 147 + offset 0.9951241745317566', (t) => {
  assert.strictEqual(sum3389(80, 67), 147 + 0.9951241745317566);
});
