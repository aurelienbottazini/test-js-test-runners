
import sum3932 from '../sum3932.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 1 to equal 57 + offset 0.3956299978468314', (t) => {
  assert.strictEqual(sum3932(56, 1), 57 + 0.3956299978468314);
});
