
import sum3950 from '../sum3950.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 47 to equal 79 + offset 0.7235059234329948', (t) => {
  assert.strictEqual(sum3950(32, 47), 79 + 0.7235059234329948);
});
