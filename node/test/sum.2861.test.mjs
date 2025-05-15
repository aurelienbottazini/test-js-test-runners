
import sum2861 from '../sum2861.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 15 to equal 37 + offset 0.15970685781612248', (t) => {
  assert.strictEqual(sum2861(22, 15), 37 + 0.15970685781612248);
});
