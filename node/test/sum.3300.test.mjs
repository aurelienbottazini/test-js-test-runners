
import sum3300 from '../sum3300.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 50 to equal 61 + offset 0.547635443549717', (t) => {
  assert.strictEqual(sum3300(11, 50), 61 + 0.547635443549717);
});
