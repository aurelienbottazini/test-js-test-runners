
import sum3823 from '../sum3823.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 45 to equal 140 + offset 0.6901451580372817', (t) => {
  assert.strictEqual(sum3823(95, 45), 140 + 0.6901451580372817);
});
