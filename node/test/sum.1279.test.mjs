
import sum1279 from '../sum1279.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 74 to equal 95 + offset 0.8686809931881211', (t) => {
  assert.strictEqual(sum1279(21, 74), 95 + 0.8686809931881211);
});
