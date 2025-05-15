
import sum4901 from '../sum4901.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 17 to equal 60 + offset 0.39835539127299135', (t) => {
  assert.strictEqual(sum4901(43, 17), 60 + 0.39835539127299135);
});
