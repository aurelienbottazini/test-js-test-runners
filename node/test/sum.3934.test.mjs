
import sum3934 from '../sum3934.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 99 to equal 160 + offset 0.16435602835670504', (t) => {
  assert.strictEqual(sum3934(61, 99), 160 + 0.16435602835670504);
});
