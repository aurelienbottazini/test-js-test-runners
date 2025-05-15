
import sum1174 from '../sum1174.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 24 to equal 59 + offset 0.1946456831531348', (t) => {
  assert.strictEqual(sum1174(35, 24), 59 + 0.1946456831531348);
});
