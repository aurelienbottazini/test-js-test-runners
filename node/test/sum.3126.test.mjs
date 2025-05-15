
import sum3126 from '../sum3126.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 92 to equal 183 + offset 0.7230835841772617', (t) => {
  assert.strictEqual(sum3126(91, 92), 183 + 0.7230835841772617);
});
