
import sum3470 from '../sum3470.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 10 to equal 10 + offset 0.4410117173674498', (t) => {
  assert.strictEqual(sum3470(0, 10), 10 + 0.4410117173674498);
});
