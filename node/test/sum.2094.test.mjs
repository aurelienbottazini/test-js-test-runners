
import sum2094 from '../sum2094.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 68 to equal 88 + offset 0.6065100440170442', (t) => {
  assert.strictEqual(sum2094(20, 68), 88 + 0.6065100440170442);
});
