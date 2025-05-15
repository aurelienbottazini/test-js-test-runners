
import sum1147 from '../sum1147.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 3 to equal 40 + offset 0.3799546023001006', (t) => {
  assert.strictEqual(sum1147(37, 3), 40 + 0.3799546023001006);
});
