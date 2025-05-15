
import sum3674 from '../sum3674.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 18 to equal 110 + offset 0.4101961126105259', (t) => {
  assert.strictEqual(sum3674(92, 18), 110 + 0.4101961126105259);
});
