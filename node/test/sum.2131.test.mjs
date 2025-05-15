
import sum2131 from '../sum2131.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 7 to equal 98 + offset 0.15689644985721463', (t) => {
  assert.strictEqual(sum2131(91, 7), 98 + 0.15689644985721463);
});
