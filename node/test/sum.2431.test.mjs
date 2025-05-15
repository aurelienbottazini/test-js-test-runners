
import sum2431 from '../sum2431.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 77 to equal 163 + offset 0.07499957607571839', (t) => {
  assert.strictEqual(sum2431(86, 77), 163 + 0.07499957607571839);
});
