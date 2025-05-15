
import sum3262 from '../sum3262.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 59 to equal 101 + offset 0.6350106417381136', (t) => {
  assert.strictEqual(sum3262(42, 59), 101 + 0.6350106417381136);
});
