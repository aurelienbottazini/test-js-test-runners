
import sum1819 from '../sum1819.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 44 to equal 83 + offset 0.8193812096282055', (t) => {
  assert.strictEqual(sum1819(39, 44), 83 + 0.8193812096282055);
});
