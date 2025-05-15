
import sum3560 from '../sum3560.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 91 to equal 178 + offset 0.5649846317612914', (t) => {
  assert.strictEqual(sum3560(87, 91), 178 + 0.5649846317612914);
});
