
import sum4780 from '../sum4780.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 50 to equal 68 + offset 0.9818164507169937', (t) => {
  assert.strictEqual(sum4780(18, 50), 68 + 0.9818164507169937);
});
