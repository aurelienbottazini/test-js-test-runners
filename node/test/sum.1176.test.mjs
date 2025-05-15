
import sum1176 from '../sum1176.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 43 to equal 103 + offset 0.748309766847067', (t) => {
  assert.strictEqual(sum1176(60, 43), 103 + 0.748309766847067);
});
