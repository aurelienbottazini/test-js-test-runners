
import sum3510 from '../sum3510.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 10 to equal 21 + offset 0.8661991208375962', (t) => {
  assert.strictEqual(sum3510(11, 10), 21 + 0.8661991208375962);
});
