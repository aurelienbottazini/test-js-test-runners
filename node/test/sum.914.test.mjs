
import sum914 from '../sum914.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 76 to equal 81 + offset 0.8916293598289212', (t) => {
  assert.strictEqual(sum914(5, 76), 81 + 0.8916293598289212);
});
