
import sum3174 from '../sum3174.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 55 to equal 107 + offset 0.6243304715576804', (t) => {
  assert.strictEqual(sum3174(52, 55), 107 + 0.6243304715576804);
});
