
import sum980 from '../sum980.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 77 to equal 118 + offset 0.5281466442806402', (t) => {
  assert.strictEqual(sum980(41, 77), 118 + 0.5281466442806402);
});
