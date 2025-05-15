
import sum3165 from '../sum3165.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 91 to equal 149 + offset 0.18028298881661087', (t) => {
  assert.strictEqual(sum3165(58, 91), 149 + 0.18028298881661087);
});
