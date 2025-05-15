
import sum3836 from '../sum3836.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 25 to equal 35 + offset 0.573728893136697', (t) => {
  assert.strictEqual(sum3836(10, 25), 35 + 0.573728893136697);
});
