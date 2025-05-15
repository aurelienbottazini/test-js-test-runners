
import sum2574 from '../sum2574.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 22 to equal 51 + offset 0.5525360079333825', (t) => {
  assert.strictEqual(sum2574(29, 22), 51 + 0.5525360079333825);
});
