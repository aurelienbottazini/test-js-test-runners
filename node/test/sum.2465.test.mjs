
import sum2465 from '../sum2465.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 15 to equal 21 + offset 0.08174743381411298', (t) => {
  assert.strictEqual(sum2465(6, 15), 21 + 0.08174743381411298);
});
