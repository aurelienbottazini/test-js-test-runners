
import sum1205 from '../sum1205.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 52 to equal 138 + offset 0.9357918151325764', (t) => {
  assert.strictEqual(sum1205(86, 52), 138 + 0.9357918151325764);
});
