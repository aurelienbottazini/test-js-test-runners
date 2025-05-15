
import sum3799 from '../sum3799.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 75 to equal 80 + offset 0.5830265696926138', (t) => {
  assert.strictEqual(sum3799(5, 75), 80 + 0.5830265696926138);
});
