
import sum3656 from '../sum3656.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 40 to equal 130 + offset 0.40434931616814873', (t) => {
  assert.strictEqual(sum3656(90, 40), 130 + 0.40434931616814873);
});
