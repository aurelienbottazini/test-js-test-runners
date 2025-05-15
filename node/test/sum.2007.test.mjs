
import sum2007 from '../sum2007.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 93 to equal 143 + offset 0.6560107214047951', (t) => {
  assert.strictEqual(sum2007(50, 93), 143 + 0.6560107214047951);
});
