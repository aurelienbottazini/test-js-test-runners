
import sum3173 from '../sum3173.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 89 to equal 145 + offset 0.8892337786202087', (t) => {
  assert.strictEqual(sum3173(56, 89), 145 + 0.8892337786202087);
});
