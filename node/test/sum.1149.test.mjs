
import sum1149 from '../sum1149.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 42 to equal 77 + offset 0.9226070481235472', (t) => {
  assert.strictEqual(sum1149(35, 42), 77 + 0.9226070481235472);
});
