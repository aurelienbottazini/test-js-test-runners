
import sum1602 from '../sum1602.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 0 to equal 56 + offset 0.09499699382420823', (t) => {
  assert.strictEqual(sum1602(56, 0), 56 + 0.09499699382420823);
});
